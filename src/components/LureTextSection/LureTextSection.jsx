import { Container } from '@mui/material';

const LureTextSection = () => {
    return ( 
        <section>
                <Container>
                    <h2>Якийсь текст</h2>
                    <p style={{ textAlign: 'center'}}>Текст для зацікавлення читача</p>

                    <p className='lureTextParagrtaph'>Ще багато тексту для того щоб заінтригувати читача щоб він захотів заповнити заявку
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe labore magnam cumque, pariatur consequatur earum voluptate optio quis ipsam laboriosam molestiae voluptates dolor asperiores maiores, non adipisci sint odit nulla deserunt eveniet ducimus magni quos exercitationem aspernatur. Dolores doloribus dolore consequuntur eos doloremque cupiditate maxime alias nobis cumque, accusantium molestias modi iste consequatur eum dolorum assumenda tenetur? Tempora deleniti repudiandae sapiente error adipisci aliquam odit id eius aliquid, unde, aut cum quas! Earum, voluptatum libero.
                    </p>
                </Container>
            </section>
     );
}
 
export default LureTextSection;