import Router from 'next/router'

class bootstrapLink {
    static handleLink = (e, path) => {
        e.preventDefault();
        Router.push(path);
    };

    static isActive(current, route) {
        return current === route;
    }

    static isActiveClass(current, route) {
        if (current === route) {
            return 'active';
        } else {
            return '';
        }
    }
}

export default bootstrapLink;