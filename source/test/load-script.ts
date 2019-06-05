import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-mental-health-botswana-2018-json-ld', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-mental-health-botswana-2018-json-ld.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-mental-health-botswana-2018-json-ld.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});