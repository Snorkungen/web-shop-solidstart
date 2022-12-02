// 

const IS_RUNNING_ON_SERVER = (typeof window == "undefined");

export type StoreSubscriberFunc<D> = (data: D) => void;

export default class Store<D> {
    private subscribers: Array<StoreSubscriberFunc<D>> = [];
    private storeData: D;

    constructor(public initialData: D, private readonly storageKey?: string) {
        // Set stores data with initial data
        this.storeData = initialData;

        if (!IS_RUNNING_ON_SERVER && this.storageKey) {
            // if its running on the client overwrite store data with data from browser storage
            let rawDatafromStorage = sessionStorage.getItem(this.storageKey);
            if (rawDatafromStorage) this.data = JSON.parse(rawDatafromStorage);
        }
    }

    /* Methods */

    public subscribe(subscriber: typeof this.subscribers[number]) {
        return this.subscribers.push(subscriber);
    }
    public unsubscribe(subscriberId: number /* ReturnType<InstanceType<typeof Store>['subscribe']> */) {
        return delete this.subscribers[subscriberId];
    }

    private dispatch(data: D) {
        for (let subscriber of this.subscribers) {
            if (subscriber) subscriber(data);
        }
    }

    set data(data: D) {
        this.storeData = data;
        this.dispatch(data);

        if (!IS_RUNNING_ON_SERVER && this.storageKey) {
            // Overrite storage data with new data
            sessionStorage.setItem(this.storageKey, JSON.stringify(data));
        }
    }

    get data() {
        return this.storeData;
    }

    static create<D>(initialData: D, storageKey?: string) {
        return new Store<D>(initialData, storageKey);
    }
}
