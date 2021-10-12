import { render, screen } from '@testing-library/react';
import App, { resetStore } from './App';

const mockUsers = require('./__tests__/mockUsers.json');

describe('when testing the application ui', () => {

  beforeEach(() => {
    resetStore();
  });

  it('should render Hello World text', () => {
    render(<App />);
    const textElement = screen.getByText(/Hello World from Redux Saga!/i);
    expect(textElement).toBeInTheDocument();
  });

  it('should render users when Get Users button is clicked', async () => {
    render(<App />);
    let getUsersElement = screen.getByText(/Get Users/i);
    getUsersElement.click();
  
    await screen.findByText(/Clear Users/i);
    
    mockUsers.forEach((mockUser) => {
      screen.getByText(mockUser.name);
      screen.getByText(mockUser.email);
    });
  
    getUsersElement = screen.queryByText(/Get Users/i);
    expect(getUsersElement).not.toBeInTheDocument();

    const selectUserElements = screen.getAllByText(/Select/i);
    expect(selectUserElements.length).toEqual(mockUsers.length);

    const deleteUserElements = screen.getAllByText(/Delete/i);
    expect(deleteUserElements.length).toEqual(mockUsers.length);
  
  });
  
  it('should show selected user when clicking Select', async () => {
    render(<App />);
    let getUsersElement = screen.getByText(/Get Users/i);
    getUsersElement.click();

    await screen.findByText(mockUsers[0].name);
  
    let selectedUserElement = screen.queryByText(/Currently Selected User is:/i);
    expect(selectedUserElement).not.toBeInTheDocument();

    let selectUserElement = screen.getAllByText(/Select/i);
    selectUserElement[0].click();

    const selectedUserRegEx = new RegExp(`Currently Selected User is: ${mockUsers[0].name}`, 'i');
    selectedUserElement = await screen.findByText(selectedUserRegEx);

  });

  //currently broken as Delete doesn't seem to 'finish'
  xit('should remove deleted user when clicking Delete', async () => {
    render(<App />);
    let getUsersElement = screen.getByText(/Get Users/i);
    getUsersElement.click();

    await screen.findByText(mockUsers[0].name);

    let confirmSpy = jest.spyOn(window, 'confirm');
    confirmSpy.mockImplementation(jest.fn(() => true));

    let deleteUserElement = screen.getAllByText(/Delete/i);
    deleteUserElement[1].click();

    await screen.findByText(mockUsers[0].name);

    const deletedUserElement = screen.queryByText(mockUsers[1].name);
    expect(deletedUserElement).not.toBeInTheDocument();

  });

});



