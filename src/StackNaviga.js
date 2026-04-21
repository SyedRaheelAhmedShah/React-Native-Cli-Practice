import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sowcasescreen from './Sowcasescreen';
import Hook from './Hook';
import Usestate from './HookScreen/Usestate';
import UseEffect from './HookScreen/UseEffect';
import Usereffer from './HookScreen/Usereffer';
import Usecontext from './HookScreen/Usecontext';
import Usecallback from './HookScreen/Usecallback';
import Usememo from './HookScreen/Usememo';
import Usereducer from './HookScreen/Usereducer';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Main from './Screens/Main';
import MainDrawer from './Screens/Drawer/MainDrawer';
import Home from './Screens/Tabs/Home';
import Post from './Screens/Tabs/Post';
import Profile from './Screens/Tabs/Profile';
import GetApis from './Apis/apiscreen/GetApis';
import PostApi from './Apis/apiscreen/PostApi';
import PutApi from './Apis/apiscreen/PutApi';
import PatchApi from './Apis/apiscreen/PatchApi';
import DeleteApi from './Apis/apiscreen/DeleteApi';
import ApiList from './Apis/ApiList';
import Editprofilescreen from './Screens/Editprofilescreen';
import Editnotes from './Screens/Editnotes';
import Formvalidation from './Screens/Formvalidation';
import DynamicForm from '../formvalidationsSceens/DynamicForm';
import FormikYup from '../formvalidationsSceens/FormikYup';
import DynamicFormField from '../formvalidationsSceens/DynamicFormField';
import Animation from '../src/Animations/Animation';
import BasicAnimation from './Animations/BasicAnimation';
import TransformationAnimation from './Animations/TransformationAnimation';
import AnimationMethods from './Animations/AnimationMethods';
import InterpolateAnimation from './Animations/InterpolateAnimation';
import TapGestureAnimation from './Animations/TapGestureAnimation';
import PenGestureAnimation from './Animations/PenGestureAnimation';
import PanGesturePractice from './Animations/PanGesturePractice';
import TapGesturePractice from './Animations/TapGesturePractice';
import AsynMain from './AsyncStorage/AsynMain';

const Stack = createNativeStackNavigator();

const StackNaviga = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sowcasescreen" component={Sowcasescreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Editprofilescreen" component={Editprofilescreen} />
        <Stack.Screen name="Editnotes" component={Editnotes} />

        {/* Form validations */}
        <Stack.Screen name="Formvalidation" component={Formvalidation} />
        <Stack.Screen name="DynamicForm" component={DynamicForm} />
        <Stack.Screen name="FormikYup" component={FormikYup} />
        <Stack.Screen name="DynamicFormField" component={DynamicFormField} />

        {/* Animations */}
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
        <Stack.Screen
          name="TransformationAnimation"
          component={TransformationAnimation}
        />
        <Stack.Screen name="AnimationMethods" component={AnimationMethods} />
        <Stack.Screen
          name="InterpolateAnimation"
          component={InterpolateAnimation}
        />
        <Stack.Screen
          name="TapGestureAnimation"
          component={TapGestureAnimation}
        />
        <Stack.Screen
          name="PenGestureAnimation"
          component={PenGestureAnimation}
        />
        <Stack.Screen
          name="TapGesturePractice"
          component={TapGesturePractice}
        />
        <Stack.Screen
          name="PanGesturePractice"
          component={PanGesturePractice}
        />

        {/* Async storage */}
        <Stack.Screen name="AsynMain" component={AsynMain} />
        
        {/* API SCREEN */}
        <Stack.Screen name="ApiList" component={ApiList} />
        <Stack.Screen name="GetApis" component={GetApis} />
        <Stack.Screen name="PostApi" component={PostApi} />
        <Stack.Screen name="PutApi" component={PutApi} />
        <Stack.Screen name="PatchApi" component={PatchApi} />
        <Stack.Screen name="DeleteApi" component={DeleteApi} />
        {/* HOOKS Screen */}
        <Stack.Screen name="Hook" component={Hook} />
        <Stack.Screen name="Usestate" component={Usestate} />
        <Stack.Screen name="UseEffect" component={UseEffect} />
        <Stack.Screen name="Usereffer" component={Usereffer} />
        <Stack.Screen name="Usecontext" component={Usecontext} />
        <Stack.Screen name="Usecallback" component={Usecallback} />
        <Stack.Screen name="Usememo" component={Usememo} />
        <Stack.Screen name="Usereducer" component={Usereducer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNaviga;
