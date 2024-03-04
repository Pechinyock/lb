
import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumbs(){
    const location = useRouter();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;
            return(
                <div className="crumb" key={crumb}>
                    <Link href={currentLink}>{crumb}</Link>
                </div>
            );
        }
    );

    return(
        <div>
            {crumbs}
        </div>
    );
}