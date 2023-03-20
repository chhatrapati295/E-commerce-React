import styled from 'styled-components'
import {categories} from '../data'
import Category from './Category'
import {mobile} from '../responsive'
const Container = styled.div`
    width : 100%
    height : 80vh
    margin : 2rem auto
    display : flex;
    ${mobile({flexDirection : 'column',height : 'auto' ,gap : '5px' , margin : 'auto'})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>{
            return <Category item={item}/>
        })}
    </Container>
  )
}

export default Categories
