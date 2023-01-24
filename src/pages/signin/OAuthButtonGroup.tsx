import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { AiFillApple, AiOutlineGoogle } from 'react-icons/ai';
import { supabase } from '../../utils/supabase/supabase';

type ClickHandler = () => void;
type Provider = {
  name: string;
  icon: JSX.Element;
  clickHandler: ClickHandler;
};

const providers: Provider[] = [
  {
    name: 'Google',
    icon: <AiOutlineGoogle size="24" />,
    clickHandler: () => {
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://dev.laundrivr.com/dashboard'
        }
      });
    }
  },
  {
    name: 'Apple',
    icon: <AiFillApple size="24" />,
    clickHandler: () => {
      supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: 'https://dev.laundrivr.com/dashboard'
        }
      });
    }
  }
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon, clickHandler }) => (
      <Button key={name} width="full" onClick={clickHandler}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
