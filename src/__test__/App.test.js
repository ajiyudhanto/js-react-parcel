import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import App from '../App'
import { Provider } from 'react-redux'
import store from '../store'

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    shallow(
        <Provider store={ store }>
            <App />
        </Provider>
    )
})

it("there is an App component", () => {
    const wrapper = shallow(
        <Provider store={ store }>
            <App />
        </Provider>
    )
    expect(wrapper.contains(<App />)).toEqual(true)
});