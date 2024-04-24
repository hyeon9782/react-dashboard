import { instance } from "@/apis/instance"
import { tokenAtom } from "@/stores/tokenAtom";
import { useMutation } from "@tanstack/react-query"
import { useSetAtom } from "jotai";

type LoginUser = {
    email: string;
    password: string;
}

const useAuth = () => {

    const setToken = useSetAtom(tokenAtom)

    // 로그인
    const { mutate: login } = useMutation({
        mutationFn: async (loginUser: LoginUser) => await instance.post('user/sign-in', loginUser),
        onSuccess: (response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token)
            // setToken(response.data)
            alert('로그인에 성공했습니다.')
        },
        onError: (error) => {
            console.log(error);
            
            alert('로그인에 실패했습니다.')
            
        }
    })


    // 로그아웃

    // 회원가입

    // 회원정보 수정

    

    

    return { login }
}

export default useAuth