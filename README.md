# Wedding Invitation
<br>

리액트를 이용하여 만든 결혼식 초대장입니다.



---

## 프로젝트 소개

저도 20대 후반이다보니 주변 사람들의 결혼이 많아졌습니다.
결혼 초대장을 보고 떠오른 아이디어가 아니라 결혼식 당일날 식장에서 나온 웨딩 영상을 보고 웨딩 관련하여 웹으로 만들어보자는 생각으로 만들어보았습니다.
예비 웨딩촬영 사진들을 앨범 형태로 만들어 열어볼 수 있으며, 축의금을 송금할 수 있고 카카오톡으로 초대장을 전송할 수 있도록 만들었습니다.
 

---
## 개발자 소개

<br>

* 안상문 : 프론트엔드 / kirianir@naver.com
  
<br>

## 기술 스택

### Enviornment

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
 ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
 ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)


### Config

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

<br>

## 주요 기능

* 웨딩 앨범 슬라이드
* 송금 및 카카오톡 보내기
* 찾아오는 길 지도 
  

## 실행 결과

<img src = "https://github.com/user-attachments/assets/a831704b-f894-4a76-9961-3fcdc3d51d53" />

## 개선점

* ***동영상 및 이미지 최적화*** : 하나의 페이지에 동영상과 이미지들이 들어가다보니 LightHouse의 점수가 낮게 나왔습니다.<br>

  그래서 이미지를 Webp 형식으로 바꿨고, 동영상을 Webm 형식으로 변경하였고, 이미지 크기를 줄여 이미지와 동영상을 최적화 하였습니다.
<br>
  
* ***클라우드를 이용한 이미지파일 관리*** : 기본 웹에 보여지는 이미지는 약 400x300으로 충분했지만 모달창으로 띄워지는 이미지는 깨졌기때문에 원본 이미지의 크기가 필요했습니다.<br>

  하지만 이미 Webp를 지원하지 않는 브라우저에 대비해 png 파일과 Webp 파일을 세트로 저장했는데, 원본크기의 파일까지 webp와 png를 저장하는 것은 비효율적이라 판단하였습니다.
  그래서 cloudinary 를 이용하여 이미지를 클라우드에 따로 저장하였고 URL에 이미지 크기도 지정할 수 있었기에 이미지 관리를 효율적으로 할 수 있었습니다.


## 후기

Next.js 에만 몰두한 것 같아 리액트 공부도 하기 위해 이번에는 리액트로 만들어봤습니다.


사실 처음엔 하나의 페이지라 매우 간단하게 만들 수 있을거라 생각했지만 어떻게해야 최적화를 할 수 있을지 고민하다보니 간단하지 만은 않았습니다.


하지만 조금이라도 최적화를 시키는데 성공했을 때 보람을 느낄 수도 있었습니다.

