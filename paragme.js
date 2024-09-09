export function create(el, attrs = {}, ...content) {
    const node = document.createElement(el);
  
    if (attrs && typeof attrs === 'object') {
        Object.entries(attrs).forEach(([key, value]) => {
            if (key.startsWith('on')) {
                node.addEventListener(key.substring(2).toLowerCase(), value);
            } else if (key === 'style' && typeof value === 'object') {
                Object.assign(node.style, value);
            } else {
                node.setAttribute(key, value);
            }
        });
    }
  
    content.forEach(child => {
        if (typeof child === 'string') {
            node.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            node.appendChild(child);
        }
    });
  
    return node;
}

export function createFragment(el, attrs = {}, ...content) {
    console.log(el, attrs, content);
}

export function push_back(func) {
    const child = func(); // func return jsx like App function in reactjs
    document.querySelector("#app").appendChild(child); // add to app
}