import renderer from 'react-test-renderer'
import TestingEvironment from '../../../test-utils/router'
import LinkComponnent from './link'



describe('LinkComponent', () => {

    it('renders content properly', () => {
        const tree = renderer.create(
            <TestingEvironment>
                <LinkComponnent href={'/'}>Test</LinkComponnent>
            </TestingEvironment>
        ).toJSON()
        console.log(tree);
        expect(tree).toMatchSnapshot()
    })
})