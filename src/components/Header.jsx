import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#",
    onChange,
}){
    return(
        <div className="mb-14 flex items-center  flex-row ">
            <div className="flex justify-center flex-col items-center">
                <img 
                    alt=""
                    className="h-6 w-6 flex items-center object-cover justify-center gap-4"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
            </div>
            {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                {heading}
            </h2> */}
            <p className=" text-center text-sm text-white mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}