import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import { request, ContentTypes } from '../../../../store/apiLib';
import { Button, Loading } from '../../../../ui/UILib';
import { Buffer } from 'buffer';
import axios from 'axios';

export default function ButtonUploadImage(props) {
  const { user } = useSelector(state => state.userConstructor);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
    })();
  }, []);

  const pickImage = async () => {
    let { base64 } = await ImagePicker.launchImageLibraryAsync({
      base64: true
     });

    if (!base64.cancelled) {
      setLoading(true);
      getEndpointUploadImage(base64);
    }
  };

  async function getEndpointUploadImage(file_uri) {
    const data = null;
    const endpoint = `/user/${user.uid}/avatar/add?fileName=file1.jpg`;
    try {
      const res = await request('GET', endpoint, data, { 'content-type': ContentTypes.json });
      const temp_endpoint_upload_image = res.data.avatar;
      handleUploadImage(temp_endpoint_upload_image, file_uri);
    }
    catch (e) {
      console.log(e);
    }
  }

  async function handleUploadImage(temp_endpoint_upload_image, file_uri) {
    const data = new Buffer(file_uri, 'base64') // upload it
    const url = temp_endpoint_upload_image;
    try {
      axios.put(url, data, {
        headers: { 'Content-Type': 'image/png' } // add Content-Type on header
      });
      setLoading(false);
      props.handleRefreshUser();
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Loading visible={loading}/>
      <Button onPress={pickImage}>Upload Image</Button>
    </View>
  );
}