import instance from "./instance";
import {AsyncStorage} from "react-native";

const getMyId = async () => {
    const id = await AsyncStorage.getItem('user_id')
    return id
}

export const authApi = {
    async auth(obj){
        try {
            const {data} = await instance.post('AuthUser.php', obj)
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async register(obj){
        try {
            const {data} = await instance.post('AddUser.php', obj)
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async fetchNotifications(){

        try {
            const {data} = await instance.post('ApiUser/index.php?method=books.Sms', obj)
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
}

export const bookApi = {
    async fetchAllBook( params ){
        const searchParams = {
            avtor: params?.avtor || null,
            countGenre: params?.countGenre || 0,
            sort: params?.sort || null,
            val: params?.val || null,
            zhanr: params?.zhanr || null
        }

        try {
            const {data}= await instance.post('ApiUser/index.php?method=books.Search', searchParams)
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async fetchCurrentBook(id_book){
        try {
            const {data}= await instance.post('ApiUser/index.php?method=books.OpenBook', { id_book })
            return data[0]
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async fetchPopularBooks(){

        try {
            const {data}= await instance.post('ApiUser/index.php?method=books.MainMenu', {choiceGenre: 'Казахская литература', countGenre: 0})
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async toFavorite(id_book){
        const id_user = await getMyId()

        try {
            const {data}= await instance.post('Api/ApiUser/index.php?method=books.Like', {id_user, id_book})
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
    async fetchFavorite(){
        const id_user = await getMyId()

        try {
            const {data}= await instance.post('index.php?method=books.LikeBooks', {id_user, countGenre: 0})
            return data
        }catch (e) {
            throw new Error(e.message);
        }
    },
}

