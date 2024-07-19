import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CanteenScreen from "./screens/CanteenScreen";
import AcademicsScreen from "./screens/AcademicsScreen";
import InternshipsScreen from "./screens/InternshipsScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import ClassroomScreen from "./screens/ClassroomScreen";
import StudyMaterial from "./screens/StudyMaterial";
import { AppProvider } from "./context/AppContext";
import StudyMaterialCourse from "./Components/StudyMaterial/StudyMaterialCourse";
import StudyMaterialList from "./Components/StudyMaterial/StudyMaterialCourse";
import DownloadListScreen from "./screens/DownloadListScreen";
import UnitListScreen from "./Components/StudyMaterial/UnitListScreen";
import SemesterScreen from "./Components/StudyMaterial/SemesterScreen";
import NoticeScreen from "./screens/NoticeScreen";
import CartDisplay from "./Components/Canteen/CartDisplay";
import BillScreen from "./Components/Canteen/BillScreen";
import ImageView from "./Components/Notices/ImageView";
import ResultClass from "./Components/Academics/Result/ResultClass";
import ResultDownload from "./Components/Academics/Result/ResultDownload";
import TimeTableClass from "./Components/Academics/TimeTable/TimeTableClass";
import TimeTableDownload from "./Components/Academics/TimeTable/TimeTableDownload";
import AssignmentsCourses from "./Components/Classroom/Assignments/AssignmentsCourses";
import AssignmentDisplayList from "./Components/Classroom/Assignments/AssignmentDisplayList";
import AssignmentDisplayDetails from "./Components/Classroom/Assignments/AssignmentDisplayDetails";
import WorkshopScreen from "./Components/Academics/WorkshopScreen";

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ClassroomStack = createNativeStackNavigator();
const StudyMaterialStack = createNativeStackNavigator();
const StudyCourseStack = createNativeStackNavigator();
const CanteenStack = createNativeStackNavigator();
const NoticeStack = createNativeStackNavigator();
const AcademicsStack = createNativeStackNavigator();

function AcademicStackGroup() {
  return (
    <AcademicsStack.Navigator>
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="AcademicsScreen"
        component={AcademicsScreen}
      />
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="ResultClass"
        component={ResultClass}
      />
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="ResultDownload"
        component={ResultDownload}
      />
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="TimeTableClass"
        component={TimeTableClass}
      />
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="Workshop"
        component={WorkshopScreen}
      />
      <AcademicsStack.Screen
        options={{ headerShown: false }}
        name="TimeTableDownload"
        component={TimeTableDownload}
      />
    </AcademicsStack.Navigator>
  );
}

function StudyMaterialStackGroup() {
  return (
    <StudyMaterialStack.Navigator initialRouteName="StudyMaterial">
      <StudyMaterialStack.Screen
        options={{ headerShown: false }}
        name="StudyMaterial"
        component={StudyMaterial}
      />
      <StudyMaterialStack.Screen
        options={{ headerShown: false }}
        name="StudyCourseStackGroup"
        component={StudyCourseStackGroup}
      />
    </StudyMaterialStack.Navigator>
  );
}

function StudyCourseStackGroup() {
  return (
    <StudyCourseStack.Navigator initialRouteName="SemesterScreen">
      <StudyCourseStack.Screen
        options={{ headerShown: false }}
        name="StudyMaterialCourse"
        component={StudyMaterialCourse}
      />
      <StudyCourseStack.Screen
        options={{ headerShown: false }}
        name="StudyMaterialList"
        component={StudyMaterialList}
      />
      <StudyCourseStack.Screen
        options={{ headerShown: false }}
        name="DownloadListScreen"
        component={DownloadListScreen}
      />
      <StudyCourseStack.Screen
        options={{ headerShown: false }}
        name="UnitListScreen"
        component={UnitListScreen}
      />
      <StudyCourseStack.Screen
        options={{ headerShown: false }}
        name="SemesterScreen"
        component={SemesterScreen}
      />
    </StudyCourseStack.Navigator>
  );
}

function ClassroomStackGroup() {
  return (
    <ClassroomStack.Navigator initialRouteName="Classroom">
      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="Classroom"
        component={ClassroomScreen}
      />

      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="AssignmentCourses"
        component={AssignmentsCourses}
      />
      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="AssignmentDisplayList"
        component={AssignmentDisplayList}
      />

      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="AssignmentDisplayDetails"
        component={AssignmentDisplayDetails}
      />

      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="StudyMaterialGroupStack"
        component={StudyMaterialStackGroup}
      />
    </ClassroomStack.Navigator>
  );
}

function CanteenStackGroup() {
  return (
    <AppProvider>
      <CanteenStack.Navigator>
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="Canteen"
          component={CanteenScreen}
        />
        <CanteenStack.Screen
          options={{ headerShown: false }}
          name="CartScreen"
          component={CartDisplay}
        />
        <CanteenStack.Screen
          options={{ headerShown: false }}
          name="BillScreen"
          component={BillScreen}
        />
      </CanteenStack.Navigator>
    </AppProvider>
  );
}

function NoticeStackGroup() {
  return (
    <NoticeStack.Navigator>
      <NoticeStack.Screen
        options={{ headerShown: false }}
        name="Notices"
        component={NoticeScreen}
      />
      <NoticeStack.Screen
        options={{ headerShown: false }}
        name="ImageView"
        component={ImageView}
      />
    </NoticeStack.Navigator>
  );
}

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="CanteenGroupStack"
        component={CanteenStackGroup}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="AcademicsGroupStack"
        component={AcademicStackGroup}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Internships"
        component={InternshipsScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Feedback"
        component={FeedbackScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="ClassroomGroupStack"
        component={ClassroomStackGroup}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="NoticesGroupStack"
        component={NoticeStackGroup}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="LoginGroupStack"
        component={LoginStackGroup}
      />
    </HomeStack.Navigator>
  );
}

function LoginStackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeGroupStack"
        component={HomeStackGroup}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem("user-pass");
      value = JSON.parse(jsonValue);
      if (value) {
        setIsLoggedIn(value.isLoggedIn);
      }
    };
    getData();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppProvider>
      <NavigationContainer>
        {isLoggedIn ? <HomeStackGroup /> : <LoginStackGroup />}
      </NavigationContainer>
    </AppProvider>
  );
}
