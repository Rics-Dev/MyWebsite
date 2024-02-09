import React from 'react';
import tw from 'tailwind-styled-components';


interface AppTypeButtonProps {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
}

const StyledButton = tw.button`
    bg-white shadow-lg rounded-md border-2 border-blue-950 px-3 py-1 transition
    hover:bg-blue-950 hover:text-white hover:border-white 
    focus:bg-blue-950 focus:text-white focus:border-white 
    active:bg-blue-950 active:text-white active:border-white
`;

const AppTypeButton: React.FC<AppTypeButtonProps> = ({ onClick, children }) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default AppTypeButton;
