import styled from "styled-components"

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme["gray-300"]};
`

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.875rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:focus {
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}55;
    outline: none;
  }

  &:hover {
    border-color: ${(props) => props.theme["green-500"]};
  }

  option {
    background: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.95rem;
    padding: 0.75rem;
  }

  option:disabled {
    color: ${(props) => props.theme["gray-500"]};
  }
`
