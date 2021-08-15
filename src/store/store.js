import { createStore} from 'vuex'
const store=createStore({
    state(){
        return {
            memories:[
                {
                    id: 'm1',
                    title: 'A trip to Himalays',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Himalya%2C%2C%2C.jpg',
                    description:'It was a really nice Trip'
                },
                {
                    id: 'm1',
                    title: 'Rafting in Ganaga',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/River_Ganga_%2843366576095%29.jpg/1024px-River_Ganga_%2843366576095%29.jpg',
                    description:'This was scary'
                },
                {
                    id: 'm1',
                    title: 'Beautiful north east',
                    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Clouds6.jpg/1024px-Clouds6.jpg',
                    description:'What a Bliss'
                },
                {
                    id: 'm1',
                    title: 'Historical South',
                    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sun_Temple_Main_Structure%2C_Konark%2C_Orissa.jpg/793px-Sun_Temple_Main_Structure%2C_Konark%2C_Orissa.jpg',
                    description:'Knowledge and wow'
                }
            ]
        };
    },
    getters :{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) =>{
               return state.memories.find((memory)=>memory.id===memoryId);
            }
        }
    }
});
export default store;