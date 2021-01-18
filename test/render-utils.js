import {prettyDOM, render} from '@testing-library/vue';
import {createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import { jotaRouterMixin } from '@/app/services/JotaRouter'
import { registerGlobalComponents } from '@/app/GlobalComponentsLoader'
import {screen} from '@testing-library/vue'

// import Router from 'vue-router';
// import {routes} from '@/router';

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
};

export function debug(doc = document) {
    // Using global document when no param passed
    const maxLines = 100000
    console.log(prettyDOM(doc, maxLines))
  }

export const resolvePromises = () =>
    new Promise((resolve) => setImmediate(resolve))

const defaultRouter = {
    replace: jest.fn(),
    push: jest.fn()
};

export const buildDefaultRoute = () => ({
    query: {},
    name: 'mocked-route'
});

export const yesterdayDayOfMonth = () => {
    const date = new Date()
    date.setDate(date.getDate() - 1)
    return date.getDate().toString()
}

export const tomorrow = () => {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    return date
}

//Acertijo
export const tomorrowDayOfMonth = () => tomorrow().getDate().toString()

export function renderComponent (component, setup={}) {
    const localVue = createLocalVue()
    const defaultSetup = {
        localVue,
        mocks: {
            $route: setup.route || buildDefaultRoute(),
            $router: setup.router || defaultRouter
        },
        // Stubbing some components to simplify test rendering
        stubs: {
            'router-view': true,
        }
    }

    initializePlugins(localVue)

    const mixin = setup.jotaRouter ? buildMixinWithMockedJotaRouter(setup.jotaRouter) : jotaRouterMixin
    initializeJotaRouterMixin(localVue, mixin)

    const utils = render(component, {
        ...defaultSetup, ...setup, 
    });
    return {...utils, debug, screen}
}

function initializePlugins(vueInstance) {
    vueInstance.use(Vuelidate)
    vueInstance.use(Quasar)
    // http://forum.quasar-framework.org/topic/278/turn-off-the-annoying-vue-production-tip/7
    vueInstance.config.productionTip = false
    vueInstance.use(Vuex)
    // vueInstance.use(VueRouter)
    registerGlobalComponents(vueInstance)
}

function initializeJotaRouterMixin(vueInstance, jotaRouterMixin) {
    vueInstance.mixin(jotaRouterMixin)
}

export function buildMixinWithMockedJotaRouter(jotaRouter) {
    return {
        created: function () {
          this.jotaRouter = jotaRouter({})
        }
    }
}