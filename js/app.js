const LIST = [
    {
        id: 1,
        nome: 'Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Anakin Skywalker',
        avatar: 'images/anakin.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 6,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'C3PO',
        avatar: 'images/c3po.png'
    },
    {
        id: 8,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    }

]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        characters: LIST,
        searchName: '',
        buscaSemResultados: false
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },

        remove(id) {


            const confirmacao = window.confirm("Você tem certeza que deseja remover este personagem?");

            if (confirmacao) {
                const list = this.characters

                const result = list.filter(item => {
                    return item.id !== id
                })

                this.characters = result

            }


        },
        search() {

            if (this.searchName === '') {
                return alert('O campo de busca é obrigatório!')

            }
            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome.toLowerCase() === this.searchName.toLowerCase()
            })

            if (result.length <= 0) {
                this.buscaSemResultados = true
                this.characters = []
            } else {
                this.buscaSemResultados = false
                this.characters = result

            }

        }
    }
})
