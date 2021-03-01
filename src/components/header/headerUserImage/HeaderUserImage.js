import React from 'react';
import { useSelector } from 'react-redux';
import { ImageUser } from '../../../ui/UILib';

export default function HeaderUserImage (props) {
  const { user } = useSelector(state => state.userConstructor);
  const image = `https://${user.avatar}`;
  return (
    <ImageUser
      size={32}
      image={image}
    >
    </ImageUser>
  )
}
