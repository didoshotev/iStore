import { render, screen, fireEvent, waitFor, } from '@testing-library/react'
import TestingEvironment from '../../../test-utils/router'
import GridItem from './grid-item'
import * as localCard from '../../../utils/localstorage.card'
jest.mock('../../../utils/localstorage.card')


describe('GridItem Component', () => {
    it('Should display title', () => {
        render(
            <TestingEvironment>
                <GridItem title={'Test'} />
            </TestingEvironment>
        )
        expect(document.querySelector('h4').textContent).toBe('Test')
    })

    it('Should display info', () => {
        render(
            <TestingEvironment>
                <GridItem info={'Test info'}/>
            </TestingEvironment>
        )
        expect(document.querySelector('p').textContent).toBe('Test info')
    })

    it('Should display 2 buttons when logged', async() => {
        render(
            <TestingEvironment value={{
                user: {
                    loggedIn: true
                }
            }}>
                <GridItem info={'Test info'} isCart/>
            </TestingEvironment>
        )
        
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(2)
    })
    it('Should display 1 button when not logged', async() => {
        render(
            <TestingEvironment value={{
                user: {
                    loggedIn: false
                }
            }}>
                <GridItem info={'Test info'}/>
            </TestingEvironment>
        )
        
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(1)
    })
})