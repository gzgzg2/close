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
        "excerpt":"1. 운영체제란 무엇인가? 컴퓨터 하드웨어 바로 윗단에 설치되는 소프트웨어를 말한다. 운영체제는 하드웨어와 소프트웨어를 연결하는 소프트웨어 계층이다. ✔️ 운영체제의 주요역할 하드웨어 자원을 효율적으로 관리 사용자가 컴퓨터를 쉽게 다룰 수 있게 GUI 인터페이스 제공 ✔️ 자원이란 CPU, 메모리, 하드웨어 뿐만 아니라 소프트웨어 자원까지 포함하여 부르는 말이다. 자원관리는 운영체제의 중요한 역할 중 하나이다* ✔️ 협의의 운영체제(커널)...","categories": ["OS"],
        "tags": ["운영체제란?","운영체제의 목적","운영체제 구조","Operating System"],
        "url": "/os/os-study-01/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 컴퓨터 구조와 컴퓨터 시스템 동작원리",
        "excerpt":"1. 컴퓨터 구조 ✔️ 전문가적 입장에서 컴퓨터를 말할 때, 보통 CPU와 Memory를 말한다. ✔️ 컴퓨터는 CPU, Memory, I/O Device, Disk, 네트워크 장비들로 이뤄져있다. 2. 컴퓨터 시스템 구조 ✔️  CPU CPU는 매 클럭사이클 마다 메모리에서 instruction을 하나씩 읽어서 실행한다. instruction 수행이 종료되면 Interrupt Line을 체크하고 인터럽트 신호가 확인되면 수행한다. ✔️  Modebit 사용자가 프로그램의 잘못된...","categories": ["OS"],
        "tags": ["운영체제","컴퓨터 구조","OS","Operating System"],
        "url": "/os/os-study-02/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스와 쓰레드",
        "excerpt":"1. 프로세스 “Process is a program in execution” ✔️ 프로세스의 문맥(context) CPU 수행 상태를 나타내는 하드웨어 문맥 하드웨어 문맥 Program Counter 각종 register 프로세스의 주소 공간 (프로세스마다 각자의 주소공간을 가지고 있음) code, data, stack 프로세스 관련 커널 자료 구조 PCB (Process Control Block) Kernel stack ✔️ 프로세스는 상태가 변경되며 수행된다 Running CPU를...","categories": ["OS"],
        "tags": ["프로세스","스케줄러","OS","Operating System","쓰레드","Thread"],
        "url": "/os/os-study-03/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스의 특성과 CPU 스케줄링",
        "excerpt":"1. CPU and I/O Bursts In Program Execution 어떤 프로그램이든 프로그램을 실행한다는 것은 CPU Burst와 I/O Burst를 반복하게 되는 것이다. ❓CPU Burst CPU에서 instruction을 수행하는 것 ❓ I/O Burst I/O를 instruction을 수행하는 작업 💡 프로세스의 특성 분류 ✔️ I/O-bound process CPU를 잡고 계산하는 시간보다 I/O에 많은 시간이 필요한 Job (many short CPU bursts) ✔️CPU-bound...","categories": ["OS"],
        "tags": ["CPU 스케줄링","Round Robin","SJF 스케줄링","FCFS","우선순위 스케줄링"],
        "url": "/os/os-study-04-02/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 프로세스 생성과 프로세스의 협력",
        "excerpt":"1. 프로세스와 관련한 시스템 콜 ✔️ fork() create a child (copy) ✔️ exec() overlay new image ✔️ wait() sleep until child is done ✔️ exit() frees all the resources, notify parent 2. 프로세스 생성 (Process Creation) ‼️  Copy-on-wirte(COW) 자원의 내용이 변경될 때 메모리 영역을 복제하고 변경되지 않을 경우에는 부모 프로세스의...","categories": ["OS"],
        "tags": ["프로세스 생성","부모 프로세스","자식 프로세스","Operating System"],
        "url": "/os/os-study-04/",
        "teaser": null
      },{
        "title": "[운영체제 스터디] 다단계 큐 스케줄링과 프로세스 동기화",
        "excerpt":"1. Multilevel Queue (SingleCore Cpu 기준) ✔️ Multilevel Feedback Queue보다 프로세스 차별적인 방식 ✔️ Ready queue를 여러 개로 분할 foreground (interactive) background (batch - no human interaction) ✔️  각 큐는 독립적인 스케줄링 알고리즘을 가짐 foreground - RR (라운드 로빈) 사용자와 대화하는 프로세스이기 때문에 응답시간이 짧은 것이 중요하다 background - FCFS (선입선출) 사용자와...","categories": ["OS"],
        "tags": ["멀티 피드백 큐","멀티레벨 큐","프로세스 동기화","Operating System"],
        "url": "/os/os-study-05/",
        "teaser": null
      }]
