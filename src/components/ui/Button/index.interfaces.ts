export interface IButton {
    onClick?: () => void, //TODO: change to compulsory
    mode?: "primary" | "secondary" | "alternative"
}