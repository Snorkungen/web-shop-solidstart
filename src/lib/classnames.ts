type Name = string | undefined | [string, boolean | undefined];
export default function classnames(...names : Name[] ) {
    return names.map((name) => {
        if (!name) return "";
        if(Array.isArray(name)) return !!name[1] ? name[0] : "";
        return name;
    }).join(" ");
} 