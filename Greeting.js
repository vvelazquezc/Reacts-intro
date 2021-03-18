const e = React.createElement;
const element =  document.getElementById("wrapper")

const listElements = [
    {
        src: "assets/demo1.png",
        title: "scathcer",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima cupiditate dolore nobis illum modi. Harum, quam quia quod accusantium, quae corrupti facilis modi fugit asperiores, magnam architecto eligendi illo?"
    },
    {
        src: "assets/demo2.jpg",
        title: "cabalistically",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima cupiditate dolore nobis illum modi. Harum, quam quia quod accusantium, quae corrupti facilis modi fugit asperiores, magnam architecto eligendi illo?"
    },
    {
        src: "assets/demo3.jpg",
        title: "jorganium",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima cupiditate dolore nobis illum modi. Harum, quam quia quod accusantium, quae corrupti facilis modi fugit asperiores, magnam architecto eligendi illo?"
    }
]

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { src, title, body } = this.props
        return e('div', { className: 'card' }, [
                e('img', { src }),
                e('h2', {}, title),
                e('p', {}, body),
                e('button', {}, 'Read More')
            ])
    }
}

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { listElements } = this.props
        const fragment = listElements.map(card => {
           return e(Card, {src: card.src, title: card.title, body: card.body})
        })
        return e('div', {className: "card__list"}, fragment)

    }
}

ReactDOM.render(
    e(CardList, { listElements }),
    element
)
