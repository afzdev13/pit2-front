import { useAtom } from "jotai";
import { UserReadWrite } from "../atoms/userAtom";
import { IUser } from "../interfaces/user";

type useUserProps = {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
}

export const useUser = (): useUserProps => {
  const [user, setUser] = useAtom(UserReadWrite);

  return {
    user,
    setUser,
  };
};
