import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => {

    const arry = Array(9).fill(0)
   
    return( arry.map((v , indexOf)=>(
        <ContentLoader  key={indexOf}
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#d6d6d6"
        foregroundColor="#e8e8e8"
        {...props}
    >
        <rect x="109" y="369" rx="2" ry="2" width="140" height="10" /> 
        <rect x="108" y="393" rx="2" ry="2" width="140" height="10" /> 
        <rect x="30" y="72" rx="2" ry="2" width="292" height="260" />
    </ContentLoader>
    )) )
}

export default MyLoader