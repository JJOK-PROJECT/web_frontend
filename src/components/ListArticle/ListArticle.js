import './ListArticle.scss';
import List from '../List/List';
export default function ListArticle(props){
    return(
        <div className='listarticle-list-tit'>
            {
                props.list.map( li => (
                    <div className='listarticle-list'>
                        <List
                            image={li.image}
                            name={li.name}
                            message={li.message}
                        />
                    </div>
                ))
            }
        </div>
    )
}