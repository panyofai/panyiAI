import type { Plugin } from 'vite';

export default function PxToRem(): Plugin {
    return {
        name: 'px-to-rem',
        enforce: 'pre',
        transform(code, id) {
            if (!id.includes('vue')) return code
            return code.replace(/(\d+)px/g, (_, $1) => `${$1 / 16}rem`)
        }
    }
}