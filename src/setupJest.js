import '@testing-library/jest-dom/extend-expect';
import { sleep } from '../test/render-utils';

//Avoid weird async error with Quasar buttons
beforeEach(async ()=>  await sleep(1))
