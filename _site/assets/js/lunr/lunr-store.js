var store = [{
        "title": "SpringBoot - Redis Client 적용기",
        "excerpt":"들어가며 스프링부트 Redis 적용 방법을 공유하고자 게시물을 작성하였다. 예제코드로 적용 방법을 알아보자 🌟 Redis 의존 설정 Spring은 다양한 Redis 의존설정 방법을 제공한다. 1 - Gradle이나 Maven 설정 파일에 의존 추가하기 dependencies { implementation 'org.springframework.boot:spring-boot-starter-data-redis' } 2 - Intellij tool 을 사용하여 SpringBoot 프로젝트 생성시점에 Spring Data Redis 를 추가하는 방법이다. 3...","categories": ["SpringBoot"],
        "tags": ["springBoot","redis","lettuce"],
        "url": "/springboot/spring-boot-redis/",
        "teaser": null
      },{
        "title": "SpringFramework - Web ApplicationContext",
        "excerpt":"1. IoC 컨테이너 : 빈 팩토리와 애플리케이션 컨텍스트 스프링 애플리케이션에서는 오브젝트의 생성과 관계설정, 사용, 제거 등의 작업을 애플리케이션 코드 대신 독립적인 컨테이너가 담당한다. 이를 컨테이너가 코드 대신 오브젝트 제어권을 갖고있다고 해서 IoC 라고 부른다. 그래서 스프링 컨테이너를 IoC 컨테이너 라고도 한다. 스프링에선 IoC를 담당하는 컨테이너를 빈 팩토리 또는 애플리케이션 컨텍스트라고...","categories": ["Tobi"],
        "tags": ["springframework","applicationContext","dispatcherServlet","토비의 스프링 3.1"],
        "url": "/tobi/spring-applicationcontext/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 운영체제란 무엇인가?",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. 운영체제란 무엇인가? 컴퓨터 하드웨어 바로 윗단에 설치되는 소프트웨어를 말한다. 운영체제는 하드웨어와 소프트웨어를 연결하는 소프트웨어 계층이다. ✔️ 운영체제의 주요역할 하드웨어 자원을 효율적으로 관리 사용자가 컴퓨터를 쉽게 다룰 수 있게 GUI 인터페이스 제공 ✔️ 자원이란...","categories": ["OS"],
        "tags": ["운영체제란?","운영체제의 목적","운영체제 구조","Operating System","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-01/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 컴퓨터 구조와 컴퓨터 시스템 동작원리",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. 컴퓨터 구조 ✔️ 전문가적 입장에서 컴퓨터를 말할 때, 보통 CPU와 Memory를 말한다. ✔️ 컴퓨터는 CPU, Memory, I/O Device, Disk, 네트워크 장비들로 이뤄져있다. 2. 컴퓨터 시스템 구조 ✔️  CPU CPU는 매 클럭사이클 마다 메모리에서...","categories": ["OS"],
        "tags": ["운영체제","컴퓨터 구조","OS","Operating System","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-02/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스와 쓰레드",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. 프로세스 “Process is a program in execution” ✔️ 프로세스의 문맥(context) CPU 수행 상태를 나타내는 하드웨어 문맥 하드웨어 문맥 Program Counter 각종 register 프로세스의 주소 공간 (프로세스마다 각자의 주소공간을 가지고 있음) code, data,...","categories": ["OS"],
        "tags": ["프로세스","스케줄러","OS","Operating System","쓰레드","Thread","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-03/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스의 특성과 CPU 스케줄링",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. CPU and I/O Bursts In Program Execution 어떤 프로그램이든 프로그램을 실행한다는 것은 CPU Burst와 I/O Burst를 반복하게 되는 것이다. ❓CPU Burst CPU에서 instruction을 수행하는 것 ❓ I/O Burst I/O를 instruction을 수행하는 작업 💡 프로세스의...","categories": ["OS"],
        "tags": ["CPU 스케줄링","Round Robin","SJF 스케줄링","FCFS","우선순위 스케줄링","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-04-02/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스 생성과 프로세스의 협력",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. 프로세스와 관련한 시스템 콜 ✔️ fork() create a child (copy) ✔️ exec() overlay new image ✔️ wait() sleep until child is done ✔️ exit() frees all the resources, notify parent 2....","categories": ["OS"],
        "tags": ["프로세스 생성","부모 프로세스","자식 프로세스","Operating System","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-04/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 다단계 큐 스케줄링과 프로세스 동기화",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. Multilevel Queue (SingleCore Cpu 기준) ✔️ Multilevel Feedback Queue보다 프로세스 차별적인 방식 ✔️ Ready queue를 여러 개로 분할 foreground (interactive) background (batch - no human interaction) ✔️  각 큐는 독립적인 스케줄링 알고리즘을 가짐...","categories": ["OS"],
        "tags": ["멀티 피드백 큐","멀티레벨 큐","프로세스 동기화","Operating System","반효경","운영체제와 정보기술의 원리"],
        "url": "/os/os-study-05/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스 동기화 조건 3가지와 뮤텍스 세마포어",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 1. 프로세스 동기화 프로그램적 해결법의 충족 조건 프로세스가 임계구역에 동시에 접근하는 것을 방지하고 데이터 일관성을 유지하려면 아래 세가지 조건을 충족해야한다. ✔️ Mutual Exclustion 프로세스 Pi가 Critical Section 부분을 수행 중이면 다른 모든 프로세스들은 그들의...","categories": ["OS"],
        "tags": ["반효경","교착상태","프로세스 동기화","세마포어","뮤텍스"],
        "url": "/os/os-study-06/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스 동기화 문제 3가지 해결방법과 세마포어 뮤텍스 차이",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 Process Synchronization(Concurrency) ‼️  프로세스 동기화와 관련된 3가지 문제 Bounded-Buffer Problem Readers and Writers Problem Dining-Philosophers Problem 1. Bounded-Buffer Problem (Producer-Consumer Problem) Bounded-Buffer Problem란 생산자와 사용자의 비율이 맞지않아서 사용자나 생산자가 무한히 대기하거나, 공유데이터에 동시에...","categories": ["OS"],
        "tags": ["반효경","식사하는 철학자","모니터","세마포어","뮤텍스"],
        "url": "/os/os-study-07/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 데드락과 데드락 발생조건 4가지",
        "excerpt":"🌟 본 게시물은 이화여자대학교 반효경 교수님 강의를 참고로 작성한 게시물 입니다. 틀린 내용은 꼬옥 지적 부탁드립니다 ! 🌟 ⚠️ Deadlock ✔️ Deadlock 이련의 프로세스들이 서로가 가진 자원을 기다리며 block된 상태 ✔️ Resource(자원) 하드웨어, 소프트웨어 등을 포함하는 개념 (예) I/O device. CPU cycle, memory space, semaphore 등 프로세스가 자원을 사용하는 절차 요청 (Request),획득 (Allocate),사용 (Use),...","categories": ["OS"],
        "tags": ["반효경","데드락","운영체제","데드락 발생 4가지 조건"],
        "url": "/os/os-study-08/",
        "teaser": null
      },{
        "title": "[네트워크 스터디] Chapter_01 웹 브라우저가 메세지를 만든다",
        "excerpt":"📗 Chapter_01 웹 브라우저가 메세지를 만든다 1. HTTP 리퀘스트 메세지를 작성한다 1️⃣  URL ✔️ HTTP URL 의 구성 ex ) http://user:password@www.example.co.kr:80/dir/file1.html 프로토콜 → http 사용자명 (생략 가능) → user 패스워드 (생략 가능) → password 웹 서버의 도메인명 → www.example.co.kr 포트번호 (생략 가능) → 80 파일의 경로명 → /dir/file1.html 💡 HTTP 의 경우...","categories": ["networkStudy"],
        "tags": ["HTTP","Socket","DNS","TCP","성공과 실패를 위한 네트워크 1%의 원리"],
        "url": "/networkstudy/network-study-01/",
        "teaser": null
      }]
