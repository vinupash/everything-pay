import './Button.scss';

export const Button = ({
    title
}) => {
    return (
        <>
            {/* <button className='button'>{title}</button> */}
            <button className='btn btn-primary button' type="button">Button</button>
        </>
    )
}