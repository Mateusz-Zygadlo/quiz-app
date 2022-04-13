import { game } from '../../components/game.js';
export function nextAnswer(props) {
    props.answer.increment();
    return game({ ...props });
}
