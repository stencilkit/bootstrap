export function isColor(color: string) {
    const col = color.replace(/\ /g, '');
    return (col.substr(0, 1) == '#') || (col.substr(0, 3) == 'rgb');
}