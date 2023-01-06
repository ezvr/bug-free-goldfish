
export const FirstComponent = ({prop1,children})=>{
    
 

    return(
        <>
            <div>props:{prop1}</div>
            <div>{children}</div>
        </>
    )
}

export const SecondComponent = (props) => {
    return(    
    <div> props:{props.prop2} </div>
    )

}

export const ThirdComponent = ({title,text}) => {

    return(
        <div>
        <h1> {title} </h1>
        <p>{text}</p>
        </div>
    )
}

export default FirstComponent



