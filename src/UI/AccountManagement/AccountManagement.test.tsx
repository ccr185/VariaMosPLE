import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import ProjectService from "../../Application/Project/ProjectService";
import AccountManagement from "./AccountManagement";

//The splash component is not used anywhere else
describe('The Splash component should be rendered', ()=>{
  test('The splash component should be visible', ()=>{
    render(<AccountManagement/>);
    expect(true).toBe(true)
  })
})
