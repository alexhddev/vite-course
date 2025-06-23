import { ImagesList } from './ImagesList'
import { render, screen } from '@testing-library/react'

describe('ImagesList tests', ()=>{
    it('Should render heading', ()=>{
        render(<ImagesList />)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
})