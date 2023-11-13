import Home from "@/app/page"
import  { render,screen } from "@testing-library/react"

describe('Home page - Rendering', ()=>{
    it('should have HomePage text', ()=>{
        render(<Home />);
        screen.getByText('hello page');
    });
    it('should have button with text clilck me', ()=>{
        render(<Home />);
        screen.getByRole('button', {name: "Click me"})
    })
})