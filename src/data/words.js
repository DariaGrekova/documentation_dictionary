export const words = [
	{
		id: 1,
		word: "component",
		transcription: "[kəmˈpoʊnənt]",
		translation: "компонент",
		example: {
			en: "React components are JavaScript functions that return markup.",
			ru: "React-компоненты — это JavaScript-функции, которые возвращают разметку."
		},
		category: "basics"
	},
	{
		id: 2,
		word: "render",
		transcription: "[ˈrɛndər]",
		translation: "рендер / отрисовка",
		example: {
			en: "React will re-render the component when its state changes.",
			ru: "React повторно отрендерит компонент, когда изменится его состояние."
		},
		category: "basics"
	},
	{
		id: 3,
		word: "state",
		transcription: "[steɪt]",
		translation: "состояние",
		example: {
			en: "State is local to a component instance on the screen.",
			ru: "Состояние локально для конкретного экземпляра компонента на экране."
		},
		category: "basics"
	},
	{
		id: 4,
		word: "props",
		transcription: "[prɑps]",
		translation: "пропсы / свойства",
		example: {
			en: "Props are the information that you pass to a JSX tag.",
			ru: "Пропсы — это информация, которую вы передаёте JSX-тегу."
		},
		category: "basics"
	},
	{
		id: 5,
		word: "hook",
		transcription: "[hʊk]",
		translation: "хук",
		example: {
			en: "Hooks are functions that let you \"hook into\" React features.",
			ru: "Хуки — это функции, позволяющие подключаться к возможностям React."
		},
		category: "basics"
	},
	{
		id: 6,
		word: "effect",
		transcription: "[ɪˈfɛkt]",
		translation: "эффект",
		example: {
			en: "Effects let you specify side effects that are caused by rendering.",
			ru: "Эффекты позволяют описывать побочные эффекты, вызванные рендером."
		},
		category: "basics"
	},
	{
		id: 7,
		word: "re-render",
		transcription: "[riːˈrɛndər]",
		translation: "повторный рендер",
		example: {
			en: "A re-render happens when React updates a component with new data.",
			ru: "Повторный рендер происходит, когда React обновляет компонент новыми данными."
		},
		category: "basics"
	},
	{
		id: 8,
		word: "JSX",
		transcription: "[ˌdʒeɪˌɛsˈɛks]",
		translation: "JSX",
		example: {
			en: "JSX is a syntax extension for JavaScript that looks similar to HTML.",
			ru: "JSX — расширение синтаксиса JavaScript, похожее на HTML."
		},
		category: "basics"
	},
	{
		id: 9,
		word: "tree",
		transcription: "[triː]",
		translation: "дерево",
		example: {
			en: "React creates a UI tree of components for the browser DOM.",
			ru: "React создаёт дерево UI из компонентов для DOM браузера."
		},
		category: "basics"
	},
	{
		id: 10,
		word: "root",
		transcription: "[ruːt]",
		translation: "корень / корневой",
		example: {
			en: "The root component is the top-level entry point of your app.",
			ru: "Корневой компонент — верхнеуровневая точка входа в приложение."
		},
		category: "basics"
	},
	{
		id: 11,
		word: "element",
		transcription: "[ˈɛləmənt]",
		translation: "элемент",
		example: {
			en: "A React element is the smallest building block, created with JSX.",
			ru: "React-элемент — минимальный строительный блок UI, созданный с помощью JSX."
		},
		category: "basics"
	},
	{
		id: 12,
		word: "DOM",
		transcription: "[dɑm]",
		translation: "DOM",
		example: {
			en: "React updates the browser DOM to match your component tree.",
			ru: "React обновляет DOM браузера в соответствии с деревом компонентов."
		},
		category: "basics"
	},
	{
		id: 13,
		word: "attribute",
		transcription: "[ˈætrəˌbjuːt]",
		translation: "атрибут",
		example: {
			en: "JSX attributes become HTML attributes when rendered to the DOM.",
			ru: "Атрибуты JSX при рендере в DOM становятся HTML-атрибутами."
		},
		category: "basics"
	},
	{
		id: 14,
		word: "className",
		transcription: "[klæs neɪm]",
		translation: "имя класса",
		example: {
			en: "Use className instead of class for CSS classes in JSX.",
			ru: "В JSX для CSS-классов используйте className вместо class."
		},
		category: "basics"
	},
	{
		id: 15,
		word: "style",
		transcription: "[staɪl]",
		translation: "стиль",
		example: {
			en: "Inline styles in React are written as objects with camelCase properties.",
			ru: "Встроенные стили в React записываются как объекты со свойствами в camelCase."
		},
		category: "basics"
	},
	{
		id: 16,
		word: "state variable",
		transcription: "[steɪt ˈvɛriəbəl]",
		translation: "переменная состояния",
		example: {
			en: "You can add a state variable with the useState Hook.",
			ru: "Переменную состояния можно добавить с помощью хука useState."
		},
		category: "state"
	},
	{
		id: 17,
		word: "setter function",
		transcription: "[ˈsɛtər ˈfʌŋkʃən]",
		translation: "функция-сеттер",
		example: {
			en: "The setter function lets you update the state and trigger a re-render.",
			ru: "Функция-сеттер позволяет обновить состояние и вызвать повторный рендер."
		},
		category: "state"
	},
	{
		id: 18,
		word: "initial value",
		transcription: "[ɪˈnɪʃəl ˈvæljuː]",
		translation: "начальное значение",
		example: {
			en: "useState accepts an initial value and returns an array.",
			ru: "useState принимает начальное значение и возвращает массив."
		},
		category: "state"
	},
	{
		id: 19,
		word: "update",
		transcription: "[ʌpˈdeɪt]",
		translation: "обновление",
		example: {
			en: "Never update state directly; always use the setter function.",
			ru: "Никогда не изменяйте state напрямую — всегда используйте setter."
		},
		category: "state"
	},
	{
		id: 20,
		word: "immutable",
		transcription: "[ɪˈmjuːtəbəl]",
		translation: "неизменяемый",
		example: {
			en: "State should be treated as immutable in React.",
			ru: "В React состояние следует рассматривать как неизменяемое."
		},
		category: "state"
	},
	{
		id: 21,
		word: "mutation",
		transcription: "[mjuːˈteɪʃən]",
		translation: "мутация",
		example: {
			en: "Avoid mutation when updating objects or arrays in state.",
			ru: "Избегайте мутации объектов и массивов при обновлении state."
		},
		category: "state"
	},
	{
		id: 22,
		word: "snapshot",
		transcription: "[ˈsnæpʃɑt]",
		translation: "снимок / слепок",
		example: {
			en: "State behaves like a snapshot — it doesn’t change until the next render.",
			ru: "Состояние ведёт себя как снимок и не меняется внутри уже выполненного рендера."
		},
		category: "state"
	},
	{
		id: 23,
		word: "batching",
		transcription: "[ˈbætʃɪŋ]",
		translation: "группировка / батчинг",
		example: {
			en: "React batches state updates inside event handlers.",
			ru: "React группирует обновления состояния внутри обработчиков событий."
		},
		category: "state"
	},
	{
		id: 24,
		word: "stale",
		transcription: "[steɪl]",
		translation: "устаревший",
		example: {
			en: "A stale closure references old values from a previous render.",
			ru: "Устаревшее замыкание ссылается на значения предыдущего рендера."
		},
		category: "state"
	},
	{
		id: 25,
		word: "derived state",
		transcription: "[dɪˈraɪvd steɪt]",
		translation: "производное состояние",
		example: {
			en: "Derived state can be computed from existing state or props.",
			ru: "Производное состояние можно вычислить из существующего state или props."
		},
		category: "state"
	},
	{
		id: 26,
		word: "lazy initializer",
		transcription: "[ˈleɪzi ɪˈnɪʃəˌlaɪzər]",
		translation: "ленивый инициализатор",
		example: {
			en: "Pass a lazy initializer to useState for expensive computations.",
			ru: "Передавайте ленивый инициализатор в useState для дорогих вычислений."
		},
		category: "state"
	},
	{
		id: 27,
		word: "ref",
		transcription: "[rɛf]",
		translation: "реф",
		example: {
			en: "Refs provide a way to access DOM nodes or store mutable values.",
			ru: "Рефы позволяют обращаться к DOM-узлам или хранить изменяемые значения."
		},
		category: "state"
	},
	{
		id: 28,
		word: "controlled",
		transcription: "[kənˈtroʊld]",
		translation: "управляемый",
		example: {
			en: "A controlled input has its value driven by React state.",
			ru: "Управляемый input получает своё значение из состояния React."
		},
		category: "state"
	},
	{
		id: 29,
		word: "uncontrolled",
		transcription: "[ˌʌnkənˈtroʊld]",
		translation: "неуправляемый",
		example: {
			en: "An uncontrolled input uses the DOM itself as the source of truth.",
			ru: "Неуправляемый input использует сам DOM как источник истины."
		},
		category: "state"
	},
	{
		id: 30,
		word: "useState",
		transcription: "[juːz steɪt]",
		translation: "хук состояния",
		example: {
			en: "useState declares a state variable that is preserved between renders.",
			ru: "useState объявляет переменную состояния, которая сохраняется между рендерами."
		},
		category: "hooks"
	},
	{
		id: 31,
		word: "useEffect",
		transcription: "[juːz ɪˈfɛkt]",
		translation: "хук эффекта",
		example: {
			en: "useEffect connects a component to an external system.",
			ru: "useEffect связывает компонент с внешней системой."
		},
		category: "hooks"
	},
	{
		id: 32,
		word: "useContext",
		transcription: "[juːz ˈkɑntɛkst]",
		translation: "хук контекста",
		example: {
			en: "useContext reads and subscribes to a context value.",
			ru: "useContext читает значение контекста и подписывается на его изменения."
		},
		category: "hooks"
	},
	{
		id: 33,
		word: "useReducer",
		transcription: "[juːz rɪˈduːsər]",
		translation: "хук редюсера",
		example: {
			en: "useReducer is an alternative to useState for complex state logic.",
			ru: "useReducer — альтернатива useState для сложной логики состояния."
		},
		category: "hooks"
	},
	{
		id: 34,
		word: "useCallback",
		transcription: "[juːz ˈkɔːlbæk]",
		translation: "хук обратного вызова",
		example: {
			en: "useCallback caches a function definition between re-renders.",
			ru: "useCallback кэширует определение функции между повторными рендерами."
		},
		category: "hooks"
	},
	{
		id: 35,
		word: "useMemo",
		transcription: "[juːz ˈmɛmoʊ]",
		translation: "хук мемоизации",
		example: {
			en: "useMemo caches the result of an expensive calculation.",
			ru: "useMemo кэширует результат дорогого вычисления."
		},
		category: "hooks"
	},
	{
		id: 36,
		word: "useRef",
		transcription: "[juːz rɛf]",
		translation: "хук ссылки",
		example: {
			en: "useRef returns a mutable object that persists across renders.",
			ru: "useRef возвращает изменяемый объект, сохраняющийся между рендерами."
		},
		category: "hooks"
	},
	{
		id: 37,
		word: "cleanup",
		transcription: "[ˈkliːnˌʌp]",
		translation: "очистка",
		example: {
			en: "The cleanup function runs when the component unmounts.",
			ru: "Функция очистки выполняется при размонтировании компонента."
		},
		category: "hooks"
	},
	{
		id: 38,
		word: "dependency array",
		transcription: "[dɪˈpɛndənsi əˈreɪ]",
		translation: "массив зависимостей",
		example: {
			en: "The dependency array tells React when to re-run the effect.",
			ru: "Массив зависимостей сообщает React, когда нужно повторно запустить effect."
		},
		category: "hooks"
	},
	{
		id: 39,
		word: "useId",
		transcription: "[juːz aɪˈdi]",
		translation: "хук идентификатора",
		example: {
			en: "useId generates a unique ID for accessibility attributes.",
			ru: "useId генерирует уникальный ID для атрибутов доступности."
		},
		category: "hooks"
	},
	{
		id: 40,
		word: "useDeferredValue",
		transcription: "[juːz dɪˈfɜːrd ˈvæljuː]",
		translation: "хук отложенного значения",
		example: {
			en: "useDeferredValue defers a state update to keep the UI responsive.",
			ru: "useDeferredValue откладывает обновление значения, чтобы интерфейс оставался отзывчивым."
		},
		category: "hooks"
	},
	{
		id: 41,
		word: "useTransition",
		transcription: "[juːz trænˈzɪʃən]",
		translation: "хук перехода",
		example: {
			en: "useTransition marks a state update as a non-urgent transition.",
			ru: "useTransition помечает обновление состояния как неприоритетный transition."
		},
		category: "hooks"
	},
	{
		id: 42,
		word: "parent",
		transcription: "[ˈpɛrənt]",
		translation: "родительский",
		example: {
			en: "A parent component can pass data down to its children via props.",
			ru: "Родительский компонент может передавать данные детям через props."
		},
		category: "components"
	},
	{
		id: 43,
		word: "child",
		transcription: "[tʃaɪld]",
		translation: "дочерний",
		example: {
			en: "Child components receive data from their parent through props.",
			ru: "Дочерние компоненты получают данные от родителя через props."
		},
		category: "components"
	},
	{
		id: 44,
		word: "sibling",
		transcription: "[ˈsɪblɪŋ]",
		translation: "соседний / сиблинг",
		example: {
			en: "Sibling components cannot directly share state — lift it up.",
			ru: "Соседние компоненты не могут напрямую делиться state — его поднимают выше."
		},
		category: "components"
	},
	{
		id: 45,
		word: "wrapper",
		transcription: "[ˈræpər]",
		translation: "обёртка",
		example: {
			en: "A wrapper component renders children inside a common layout.",
			ru: "Компонент-обёртка помещает children внутрь общего layout."
		},
		category: "components"
	},
	{
		id: 46,
		word: "nesting",
		transcription: "[ˈnɛstɪŋ]",
		translation: "вложенность",
		example: {
			en: "React components can be nested to form a tree structure.",
			ru: "React-компоненты можно вкладывать друг в друга, формируя дерево."
		},
		category: "components"
	},
	{
		id: 47,
		word: "composition",
		transcription: "[ˌkɑmpəˈzɪʃən]",
		translation: "композиция",
		example: {
			en: "React has a powerful composition model — prefer it over inheritance.",
			ru: "React использует мощную модель композиции и обычно предпочитает её наследованию."
		},
		category: "components"
	},
	{
		id: 48,
		word: "declarative",
		transcription: "[dɪˈklærətɪv]",
		translation: "декларативный",
		example: {
			en: "React uses a declarative paradigm to describe UI.",
			ru: "React использует декларативный подход для описания UI."
		},
		category: "components"
	},
	{
		id: 49,
		word: "imperative",
		transcription: "[ɪmˈpɛrətɪv]",
		translation: "императивный",
		example: {
			en: "Avoid imperative code when a declarative approach exists.",
			ru: "Избегайте императивного кода, если доступен декларативный подход."
		},
		category: "components"
	},
	{
		id: 50,
		word: "mount",
		transcription: "[maʊnt]",
		translation: "монтирование",
		example: {
			en: "A component mounts when it appears on the screen for the first time.",
			ru: "Компонент монтируется, когда впервые появляется на экране."
		},
		category: "components"
	},
	{
		id: 51,
		word: "unmount",
		transcription: "[ʌnˈmaʊnt]",
		translation: "размонтирование",
		example: {
			en: "A component unmounts when it is removed from the screen.",
			ru: "Компонент размонтируется, когда удаляется с экрана."
		},
		category: "components"
	},
	{
		id: 52,
		word: "slot",
		transcription: "[slɑt]",
		translation: "слот",
		example: {
			en: "Pass components as props to create flexible \"slot\" patterns.",
			ru: "Передавайте компоненты через props, чтобы создавать гибкие slot-паттерны."
		},
		category: "components"
	},
	{
		id: 53,
		word: "portal",
		transcription: "[ˈpɔːrtəl]",
		translation: "портал",
		example: {
			en: "Portals render children into a different DOM subtree.",
			ru: "Порталы рендерят children в другой части DOM-дерева."
		},
		category: "components"
	},
	{
		id: 54,
		word: "render prop",
		transcription: "[ˈrɛndər prɑp]",
		translation: "рендер-проп",
		example: {
			en: "A render prop is a function prop that a component uses to know what to render.",
			ru: "Render prop — это функция-prop, с помощью которой компонент определяет, что отрендерить."
		},
		category: "components"
	},
	{
		id: 55,
		word: "HOC",
		transcription: "[ˌeɪtʃ oʊ ˈsiː]",
		translation: "Higher-Order Component / компонент высшего порядка",
		example: {
			en: "An HOC is a function that takes a component and returns a new component.",
			ru: "HOC — функция, которая принимает компонент и возвращает новый компонент."
		},
		category: "components"
	},
	{
		id: 56,
		word: "pass down",
		transcription: "[pæs daʊn]",
		translation: "передавать вниз",
		example: {
			en: "Pass down props to child components explicitly.",
			ru: "Явно передавайте props вниз дочерним компонентам."
		},
		category: "props"
	},
	{
		id: 57,
		word: "lift state up",
		transcription: "[lɪft steɪt ʌp]",
		translation: "подъём состояния",
		example: {
			en: "Lift state up to a common ancestor to share it between siblings.",
			ru: "Поднимите state в общего родителя, чтобы разделить его между соседними компонентами."
		},
		category: "props"
	},
	{
		id: 58,
		word: "prop drilling",
		transcription: "[prɑp ˈdrɪlɪŋ]",
		translation: "прокидка пропсов",
		example: {
			en: "Prop drilling can be avoided with context or composition.",
			ru: "Prop drilling можно избежать с помощью context или композиции."
		},
		category: "props"
	},
	{
		id: 59,
		word: "spread",
		transcription: "[sprɛd]",
		translation: "распаковка / спред",
		example: {
			en: "Use the spread syntax to forward all props to a child component.",
			ru: "Используйте spread-синтаксис, чтобы передать все props дочернему компоненту."
		},
		category: "props"
	},
	{
		id: 60,
		word: "destructure",
		transcription: "[diːˈstrʌktʃər]",
		translation: "деструктуризация",
		example: {
			en: "Destructure props in the function signature for cleaner code.",
			ru: "Деструктурируйте props в сигнатуре функции для более чистого кода."
		},
		category: "props"
	},
	{
		id: 61,
		word: "children",
		transcription: "[ˈtʃɪldrən]",
		translation: "дети / дочерние элементы",
		example: {
			en: "The children prop lets you pass arbitrary JSX between tags.",
			ru: "Prop children позволяет передавать произвольный JSX между тегами."
		},
		category: "props"
	},
	{
		id: 62,
		word: "rest props",
		transcription: "[rɛst prɑps]",
		translation: "остальные пропсы",
		example: {
			en: "Collect remaining props with …rest syntax.",
			ru: "Соберите остальные props с помощью синтаксиса …rest."
		},
		category: "props"
	},
	{
		id: 63,
		word: "defaultProps",
		transcription: "[dɪˈfɔlt prɑps]",
		translation: "пропсы по умолчанию (устаревающий подход)",
		example: {
			en: "defaultProps provides fallback values for missing props.",
			ru: "defaultProps предоставляет значения по умолчанию для отсутствующих props."
		},
		category: "props"
	},
	{
		id: 64,
		word: "conditional rendering",
		transcription: "[kənˈdɪʃənəl ˈrɛndərɪŋ]",
		translation: "условный рендер",
		example: {
			en: "Conditional rendering lets you show different content based on state.",
			ru: "Условный рендер позволяет показывать разный контент в зависимости от state."
		},
		category: "conditional"
	},
	{
		id: 65,
		word: "ternary",
		transcription: "[ˈtɜːrnəri]",
		translation: "тернарный оператор",
		example: {
			en: "Use the ternary operator for inline conditional rendering.",
			ru: "Используйте тернарный оператор для условного рендера внутри JSX."
		},
		category: "conditional"
	},
	{
		id: 66,
		word: "short-circuit",
		transcription: "[ʃɔrt ˈsɜːrkɪt]",
		translation: "короткое замыкание",
		example: {
			en: "Short-circuit evaluation with && renders nothing if the condition is false.",
			ru: "Short-circuit с && ничего не рендерит, если условие ложно."
		},
		category: "conditional"
	},
	{
		id: 67,
		word: "key",
		transcription: "[kiː]",
		translation: "ключ",
		example: {
			en: "Each list item needs a key to help React track changes.",
			ru: "Каждому элементу списка нужен key, чтобы React отслеживал изменения."
		},
		category: "conditional"
	},
	{
		id: 68,
		word: "fragment",
		transcription: "[ˈfræɡmənt]",
		translation: "фрагмент",
		example: {
			en: "Fragments let you group elements without adding extra DOM nodes.",
			ru: "Фрагменты позволяют группировать элементы без добавления лишних DOM-узлов."
		},
		category: "conditional"
	},
	{
		id: 69,
		word: "if",
		transcription: "[ɪf]",
		translation: "if-условие",
		example: {
			en: "Use if statements for early returns in conditional rendering.",
			ru: "Используйте if для раннего возврата при условном рендере."
		},
		category: "conditional"
	},
	{
		id: 70,
		word: "switch",
		transcription: "[swɪtʃ]",
		translation: "switch-конструкция",
		example: {
			en: "A switch statement can handle multiple conditional branches in render.",
			ru: "Конструкция switch может обрабатывать несколько веток условия при рендере."
		},
		category: "conditional"
	},
	{
		id: 71,
		word: "Server Component",
		transcription: "[ˈsɜːrvər kəmˈpoʊnənt]",
		translation: "серверный компонент",
		example: {
			en: "Server Components run ahead of time on the server.",
			ru: "Серверные компоненты выполняются заранее на сервере."
		},
		category: "react19"
	},
	{
		id: 72,
		word: "Client Component",
		transcription: "[ˈklaɪənt kəmˈpoʊnənt]",
		translation: "клиентский компонент",
		example: {
			en: "Client Components can use state, effects, and event handlers.",
			ru: "Клиентские компоненты могут использовать state, effects и обработчики событий."
		},
		category: "react19"
	},
	{
		id: 73,
		word: "action",
		transcription: "[ˈækʃən]",
		translation: "действие / Action",
		example: {
			en: "Actions handle data submission and state updates automatically.",
			ru: "Actions автоматически обрабатывают отправку данных и обновления состояния."
		},
		category: "react19"
	},
	{
		id: 74,
		word: "useActionState",
		transcription: "[juːz ˈækʃən steɪt]",
		translation: "хук состояния действия",
		example: {
			en: "useActionState helps you manage the state of an async action.",
			ru: "useActionState помогает управлять состоянием асинхронного Action."
		},
		category: "react19"
	},
	{
		id: 75,
		word: "useFormStatus",
		transcription: "[juːz fɔrm ˈsteɪtəs]",
		translation: "хук статуса формы",
		example: {
			en: "useFormStatus returns the pending state of a parent form.",
			ru: "useFormStatus возвращает состояние pending родительской формы."
		},
		category: "react19"
	},
	{
		id: 76,
		word: "useOptimistic",
		transcription: "[juːz ˌɑptɪˈmɪstɪk]",
		translation: "хук оптимистичного обновления",
		example: {
			en: "useOptimistic shows the final state immediately while the server responds.",
			ru: "useOptimistic сразу показывает ожидаемое итоговое состояние, пока сервер отвечает."
		},
		category: "react19"
	},
	{
		id: 77,
		word: "transition",
		transcription: "[trænˈzɪʃən]",
		translation: "переход / транзишн",
		example: {
			en: "Transitions let you mark updates as non-urgent.",
			ru: "Transitions позволяют помечать обновления как неприоритетные."
		},
		category: "react19"
	},
	{
		id: 78,
		word: "pending",
		transcription: "[ˈpɛndɪŋ]",
		translation: "ожидание / в процессе",
		example: {
			en: "Show a spinner while the request is pending.",
			ru: "Показывайте спиннер, пока запрос находится в состоянии pending."
		},
		category: "react19"
	},
	{
		id: 79,
		word: "ref as prop",
		transcription: "[rɛf æz prɑp]",
		translation: "ref как проп",
		example: {
			en: "React 19 supports passing ref as a regular prop.",
			ru: "React 19 поддерживает передачу ref как обычного prop."
		},
		category: "react19"
	},
	{
		id: 80,
		word: "Context.Provider",
		transcription: "[ˈkɑntɛkst prəˈvaɪdər]",
		translation: "провайдер контекста",
		example: {
			en: "Wrap children with Context.Provider to supply a context value.",
			ru: "Оберните children в Context.Provider, чтобы передать значение контекста."
		},
		category: "react19"
	},
	{
		id: 81,
		word: "Strict Mode",
		transcription: "[strɪkt moʊd]",
		translation: "строгий режим",
		example: {
			en: "Strict Mode highlights potential problems during development.",
			ru: "Strict Mode помогает находить потенциальные проблемы во время разработки."
		},
		category: "dev"
	},
	{
		id: 82,
		word: "build",
		transcription: "[bɪld]",
		translation: "сборка",
		example: {
			en: "The build process compiles JSX and bundles your app for production.",
			ru: "Процесс сборки компилирует JSX и собирает приложение для production."
		},
		category: "dev"
	},
	{
		id: 83,
		word: "bundle",
		transcription: "[ˈbʌndəl]",
		translation: "бандл / пакет",
		example: {
			en: "The bundle contains all your JavaScript in a single optimized file.",
			ru: "Bundle содержит JavaScript-код приложения в оптимизированном виде."
		},
		category: "dev"
	},
	{
		id: 84,
		word: "hot reload",
		transcription: "[hɑt ˌriːˈloʊd]",
		translation: "горячая перезагрузка",
		example: {
			en: "Hot reload preserves component state during code changes.",
			ru: "Hot reload сохраняет состояние компонента при изменениях кода."
		},
		category: "dev"
	},
	{
		id: 85,
		word: "Fast Refresh",
		transcription: "[fæst rɪˈfrɛʃ]",
		translation: "Fast Refresh",
		example: {
			en: "Fast Refresh gives instant feedback on edits without losing state.",
			ru: "Fast Refresh мгновенно показывает изменения, стараясь не терять state."
		},
		category: "dev"
	},
	{
		id: 86,
		word: "source map",
		transcription: "[sɔrs mæp]",
		translation: "карта исходников",
		example: {
			en: "Source maps help debug production code by mapping back to original source.",
			ru: "Source maps помогают отлаживать production-код, связывая его с исходниками."
		},
		category: "dev"
	},
	{
		id: 87,
		word: "memoization",
		transcription: "[ˌmɛməwəˈzeɪʃən]",
		translation: "мемоизация",
		example: {
			en: "Memoization skips expensive recalculations when inputs are unchanged.",
			ru: "Мемоизация пропускает дорогие вычисления, если входные данные не изменились."
		},
		category: "performance"
	},
	{
		id: 88,
		word: "lazy loading",
		transcription: "[ˈleɪzi ˈloʊdɪŋ]",
		translation: "ленивая загрузка",
		example: {
			en: "Lazy loading defers loading component code until it renders.",
			ru: "Ленивая загрузка откладывает загрузку кода компонента до момента его рендера."
		},
		category: "performance"
	},
	{
		id: 89,
		word: "suspense",
		transcription: "[səˈspɛns]",
		translation: "Suspense / приостановка",
		example: {
			en: "Suspense displays a fallback while a component is loading.",
			ru: "Suspense показывает fallback, пока компонент загружается или ожидает готовности."
		},
		category: "performance"
	},
	{
		id: 90,
		word: "fallback",
		transcription: "[ˈfɔlbæk]",
		translation: "резервный UI / fallback",
		example: {
			en: "The fallback prop accepts a loading indicator to show.",
			ru: "Prop fallback принимает индикатор загрузки для отображения."
		},
		category: "performance"
	},
	{
		id: 91,
		word: "windowing",
		transcription: "[ˈwɪndoʊɪŋ]",
		translation: "виртуализация / windowing",
		example: {
			en: "Windowing renders only visible rows to keep large lists performant.",
			ru: "Виртуализация отображает только видимые строки, чтобы большие списки работали быстрее."
		},
		category: "performance"
	},
	{
		id: 92,
		word: "tree shaking",
		transcription: "[triː ˈʃeɪkɪŋ]",
		translation: "tree shaking",
		example: {
			en: "Tree shaking eliminates unused code from the final bundle.",
			ru: "Tree shaking удаляет неиспользуемый код из итогового bundle."
		},
		category: "performance"
	},
	{
		id: 93,
		word: "code splitting",
		transcription: "[koʊd ˈsplɪtɪŋ]",
		translation: "разделение кода",
		example: {
			en: "Code splitting loads parts of the app on demand to reduce initial load.",
			ru: "Code splitting загружает части приложения по требованию, уменьшая первоначальную загрузку."
		},
		category: "performance"
	},
	{
		id: 94,
		word: "prefetch",
		transcription: "[priːˈfɛtʃ]",
		translation: "предварительная загрузка / prefetch",
		example: {
			en: "Prefetch resources before they are needed to speed up navigation.",
			ru: "Предзагружайте ресурсы до того, как они понадобятся, чтобы ускорить навигацию."
		},
		category: "performance"
	},
	{
		id: 95,
		word: "lifecycle",
		transcription: "[ˈlaɪfˌsaɪkəl]",
		translation: "жизненный цикл",
		example: {
			en: "Effects describe the lifecycle of a component’s connection to an external system.",
			ru: "Effects описывают жизненный цикл соединения компонента с внешней системой."
		},
		category: "technical"
	},
	{
		id: 96,
		word: "handler",
		transcription: "[ˈhændlər]",
		translation: "обработчик",
		example: {
			en: "Event handlers respond to user interactions like clicks.",
			ru: "Обработчики событий реагируют на действия пользователя, например клики."
		},
		category: "technical"
	},
	{
		id: 97,
		word: "trigger",
		transcription: "[ˈtrɪɡər]",
		translation: "вызывать / запускать",
		example: {
			en: "Changing state triggers a re-render of the component.",
			ru: "Изменение state запускает повторный рендер компонента."
		},
		category: "technical"
	},
	{
		id: 98,
		word: "invoke",
		transcription: "[ɪnˈvoʊk]",
		translation: "вызывать",
		example: {
			en: "The function is invoked when the user submits the form.",
			ru: "Функция вызывается, когда пользователь отправляет форму."
		},
		category: "technical"
	},
	{
		id: 99,
		word: "fire",
		transcription: "[faɪr]",
		translation: "срабатывать",
		example: {
			en: "The click event fires when the button is pressed.",
			ru: "Событие click срабатывает, когда нажата кнопка."
		},
		category: "technical"
	},
	{
		id: 100,
		word: "subscribe",
		transcription: "[səbˈskraɪb]",
		translation: "подписываться",
		example: {
			en: "Subscribe to an external data source inside a useEffect.",
			ru: "Подписывайтесь на внешний источник данных внутри useEffect."
		},
		category: "technical"
	},
	{
		id: 101,
		word: "dispatch",
		transcription: "[dɪˈspætʃ]",
		translation: "отправлять / диспатчить",
		example: {
			en: "Dispatch an action object to update state in useReducer.",
			ru: "Отправьте action-объект, чтобы обновить state через useReducer."
		},
		category: "technical"
	},
	{
		id: 102,
		word: "fetch",
		transcription: "[fɛtʃ]",
		translation: "получать данные / выполнять запрос",
		example: {
			en: "Fetch data inside useEffect or with a library like SWR.",
			ru: "Получайте данные в useEffect или с помощью библиотеки вроде SWR."
		},
		category: "technical"
	},
	{
		id: 103,
		word: "resolve",
		transcription: "[rɪˈzɑlv]",
		translation: "успешно завершиться",
		example: {
			en: "The promise resolves with the fetched data.",
			ru: "Promise успешно завершается с полученными данными."
		},
		category: "technical"
	},
	{
		id: 104,
		word: "reject",
		transcription: "[rɪˈdʒɛkt]",
		translation: "отклонить",
		example: {
			en: "The promise rejects with an error if the network fails.",
			ru: "Promise отклоняется с ошибкой, если сеть не работает."
		},
		category: "technical"
	},
	{
		id: 105,
		word: "closure",
		transcription: "[ˈkloʊʒər]",
		translation: "замыкание",
		example: {
			en: "Stale closures are a common pitfall in useEffect.",
			ru: "Устаревшие замыкания — распространённая проблема при работе с useEffect."
		},
		category: "technical"
	},
	{
		id: 106,
		word: "scope",
		transcription: "[skoʊp]",
		translation: "область видимости",
		example: {
			en: "Variables declared inside a component are scoped to that function.",
			ru: "Переменные, объявленные внутри компонента, находятся в области видимости этой функции."
		},
		category: "technical"
	},
	{
		id: 107,
		word: "shallow",
		transcription: "[ˈʃæloʊ]",
		translation: "поверхностный",
		example: {
			en: "Shallow comparison checks only the first level of properties.",
			ru: "Поверхностное сравнение проверяет только первый уровень свойств."
		},
		category: "technical"
	},
	{
		id: 108,
		word: "deep",
		transcription: "[diːp]",
		translation: "глубокий",
		example: {
			en: "Deep comparison traverses all nested fields of an object.",
			ru: "Глубокое сравнение проходит по всем вложенным полям объекта."
		},
		category: "technical"
	},
	{
		id: 109,
		word: "payload",
		transcription: "[ˈpeɪloʊd]",
		translation: "полезная нагрузка",
		example: {
			en: "The action payload carries the data needed for the update.",
			ru: "Payload action содержит данные, необходимые для обновления."
		},
		category: "technical"
	},
	{
		id: 110,
		word: "predicate",
		transcription: "[ˈprɛdɪkət]",
		translation: "предикат",
		example: {
			en: "A predicate function returns true or false for filtering.",
			ru: "Функция-предикат возвращает true или false для фильтрации."
		},
		category: "technical"
	},
	{
		id: 111,
		word: "bind",
		transcription: "[baɪnd]",
		translation: "привязать",
		example: {
			en: "Bind event handlers in the constructor or use arrow functions.",
			ru: "Привяжите обработчики событий в конструкторе или используйте стрелочные функции."
		},
		category: "technical"
	},
	{
		id: 112,
		word: "curry",
		transcription: "[ˈkɜːri]",
		translation: "каррировать",
		example: {
			en: "Curry a function to prefill arguments and reuse logic.",
			ru: "Каррируйте функцию, чтобы заранее заполнить аргументы и переиспользовать логику."
		},
		category: "technical"
	},
	{
		id: 113,
		word: "hoisting",
		transcription: "[ˈhɔɪstɪŋ]",
		translation: "поднятие / всплытие",
		example: {
			en: "Hoisting moves declarations to the top of their scope.",
			ru: "Hoisting описывает правила обработки объявлений в начале области видимости."
		},
		category: "technical"
	},
	{
		id: 114,
		word: "serialize",
		transcription: "[ˈsɪriəˌlaɪz]",
		translation: "сериализовать",
		example: {
			en: "Props must be serializable for Server Components.",
			ru: "Props должны быть сериализуемыми для Server Components."
		},
		category: "technical"
	},
	{
		id: 115,
		word: "parse",
		transcription: "[pɑrs]",
		translation: "парсить",
		example: {
			en: "Parse the JSON response to extract the data.",
			ru: "Распарсите JSON-ответ, чтобы извлечь данные."
		},
		category: "technical"
	},
	{
		id: 116,
		word: "vendor",
		transcription: "[ˈvɛndər]",
		translation: "вендор / сторонний",
		example: {
			en: "Vendor libraries like lodash should be tree-shaken in the build.",
			ru: "Сторонние библиотеки вроде lodash должны попадать под tree shaking при сборке."
		},
		category: "technical"
	},
	{
		id: 117,
		word: "settled",
		transcription: "[ˈsɛtəld]",
		translation: "завершившийся",
		example: {
			en: "The promise has settled, meaning it is no longer pending.",
			ru: "Promise завершился, то есть больше не находится в состоянии pending."
		},
		category: "technical"
	},
	{
		id: 118,
		word: "fulfilled",
		transcription: "[fʊlˈfɪld]",
		translation: "выполненный успешно",
		example: {
			en: "A fulfilled promise means the data was successfully fetched.",
			ru: "Fulfilled promise означает, что данные были успешно получены."
		},
		category: "technical"
	},
	{
		id: 119,
		word: "teardown",
		transcription: "[ˈtɛrdaʊn]",
		translation: "завершение / teardown",
		example: {
			en: "The cleanup function handles teardown logic like removing listeners.",
			ru: "Cleanup выполняет teardown-логику, например удаляет обработчики."
		},
		category: "technical"
	},
	{
		id: 120,
		word: "polyfill",
		transcription: "[ˈpɑliˌfɪl]",
		translation: "полифил",
		example: {
			en: "Polyfills emulate modern APIs in older browsers.",
			ru: "Полифилы имитируют современные API в старых браузерах."
		},
		category: "technical"
	},
	{
		id: 121,
		word: "transpile",
		transcription: "[trænsˈpaɪl]",
		translation: "транспилировать",
		example: {
			en: "Babel transpiles JSX and ES6+ syntax to compatible JavaScript.",
			ru: "Babel транспилирует JSX и синтаксис ES6+ в совместимый JavaScript."
		},
		category: "technical"
	},
	{
		id: 122,
		word: "AST",
		transcription: "[ˌeɪˌɛsˈtiː]",
		translation: "абстрактное синтаксическое дерево",
		example: {
			en: "Compilers parse code into an AST before generating output.",
			ru: "Компиляторы разбирают код в AST перед генерацией результата."
		},
		category: "technical"
	},
	{
		id: 123,
		word: "bundler",
		transcription: "[ˈbʌndlər]",
		translation: "сборщик модулей / bundler",
		example: {
			en: "A bundler like Webpack or Vite combines modules into production assets.",
			ru: "Bundler вроде Webpack или Vite объединяет модули в production-ресурсы."
		},
		category: "technical"
	},
	{
		id: 124,
		word: "runtime",
		transcription: "[ˈrʌntaɪm]",
		translation: "среда выполнения",
		example: {
			en: "React runs in the JavaScript runtime of the browser.",
			ru: "React выполняется в JavaScript runtime браузера."
		},
		category: "technical"
	},
	{
		id: 125,
		word: "deploy",
		transcription: "[dɪˈplɔɪ]",
		translation: "развёртывание",
		example: {
			en: "Deploy your production build to a hosting service.",
			ru: "Разверните production-сборку на хостинге."
		},
		category: "technical"
	},
	{
		id: 126,
		word: "hydration",
		transcription: "[haɪˈdreɪʃən]",
		translation: "гидратация",
		example: {
			en: "Hydration attaches React event listeners to server-rendered HTML.",
			ru: "Гидратация подключает React-обработчики событий к HTML, отрендеренному сервером."
		},
		category: "technical"
	},
	{
		id: 127,
		word: "ensure",
		transcription: "[ɪnˈʃʊr]",
		translation: "гарантировать / обеспечить",
		example: {
			en: "Ensure that your effect cleans up subscriptions to avoid memory leaks.",
			ru: "Убедитесь, что effect очищает подписки, чтобы избежать утечек памяти."
		},
		category: "modal"
	},
	{
		id: 128,
		word: "avoid",
		transcription: "[əˈvɔɪd]",
		translation: "избегать",
		example: {
			en: "Avoid mutating state directly — use the setter function instead.",
			ru: "Избегайте прямой мутации state — используйте setter."
		},
		category: "modal"
	},
	{
		id: 129,
		word: "prefer",
		transcription: "[prɪˈfɜːr]",
		translation: "предпочитать",
		example: {
			en: "Prefer composition over inheritance for reusable code.",
			ru: "Предпочитайте композицию наследованию для переиспользуемого кода."
		},
		category: "modal"
	},
	{
		id: 130,
		word: "rely on",
		transcription: "[rɪˈlaɪ ɑn]",
		translation: "полагаться на",
		example: {
			en: "Do not rely on the order of renders in your logic.",
			ru: "Не полагайтесь на порядок рендеров в своей логике."
		},
		category: "modal"
	},
	{
		id: 131,
		word: "explicitly",
		transcription: "[ɪkˈsplɪsɪtli]",
		translation: "явно",
		example: {
			en: "Explicitly list all dependencies in the dependency array.",
			ru: "Явно перечисляйте все зависимости в массиве зависимостей."
		},
		category: "modal"
	},
	{
		id: 132,
		word: "implicitly",
		transcription: "[ɪmˈplɪsɪtli]",
		translation: "неявно",
		example: {
			en: "Data is implicitly passed through context to all children.",
			ru: "Данные неявно передаются через context всем дочерним компонентам."
		},
		category: "modal"
	},
	{
		id: 133,
		word: "caveat",
		transcription: "[ˈkæviˌæt]",
		translation: "оговорка / нюанс",
		example: {
			en: "One caveat: the cleanup function runs before each re-effect.",
			ru: "Есть один нюанс: cleanup выполняется перед каждым повторным запуском effect."
		},
		category: "modal"
	},
	{
		id: 134,
		word: "pitfall",
		transcription: "[ˈpɪtfɔl]",
		translation: "подводный камень",
		example: {
			en: "A common pitfall is forgetting to add the key prop to list items.",
			ru: "Распространённая ошибка — забыть добавить key элементам списка."
		},
		category: "modal"
	},
	{
		id: 135,
		word: "trade-off",
		transcription: "[ˈtreɪdˌɔf]",
		translation: "компромисс",
		example: {
			en: "There is a trade-off between bundle size and lazy loading granularity.",
			ru: "Между размером bundle и степенью детализации lazy loading есть компромисс."
		},
		category: "modal"
	},
	{
		id: 136,
		word: "concern",
		transcription: "[kənˈsɜːrn]",
		translation: "задача / ответственность",
		example: {
			en: "Separation of concerns helps keep components focused and reusable.",
			ru: "Разделение ответственности помогает сохранять компоненты сфокусированными и переиспользуемыми."
		},
		category: "modal"
	},
	{
		id: 137,
		word: "approach",
		transcription: "[əˈproʊtʃ]",
		translation: "подход",
		example: {
			en: "This approach works well for simple forms with few fields.",
			ru: "Этот подход хорошо работает для простых форм с небольшим количеством полей."
		},
		category: "modal"
	},
	{
		id: 138,
		word: "pattern",
		transcription: "[ˈpætərn]",
		translation: "паттерн / шаблон",
		example: {
			en: "The render props pattern shares logic between components.",
			ru: "Render props — паттерн для совместного использования логики между компонентами."
		},
		category: "modal"
	},
	{
		id: 139,
		word: "convention",
		transcription: "[kənˈvɛnʃən]",
		translation: "соглашение / правило",
		example: {
			en: "By convention, Hook names start with \"use\".",
			ru: "По соглашению имена хуков начинаются с «use»."
		},
		category: "modal"
	},
	{
		id: 140,
		word: "edge case",
		transcription: "[ɛdʒ keɪs]",
		translation: "граничный случай",
		example: {
			en: "Handle edge cases like empty arrays or null values.",
			ru: "Обрабатывайте граничные случаи, например пустые массивы или null."
		},
		category: "modal"
	},
	{
		id: 141,
		word: "race condition",
		transcription: "[reɪs kənˈdɪʃən]",
		translation: "состояние гонки",
		example: {
			en: "Use a cleanup flag to avoid race conditions in async effects.",
			ru: "Используйте cleanup-флаг, чтобы избежать состояний гонки в асинхронных effects."
		},
		category: "modal"
	},
	{
		id: 142,
		word: "opt in",
		transcription: "[ɑpt ɪn]",
		translation: "включить / согласиться",
		example: {
			en: "You must opt in to Strict Mode by wrapping your app.",
			ru: "Чтобы включить Strict Mode, оберните в него приложение."
		},
		category: "modal"
	},
	{
		id: 143,
		word: "opt out",
		transcription: "[ɑpt aʊt]",
		translation: "отказаться / отключить",
		example: {
			en: "You can opt out of automatic batching in rare cases.",
			ru: "В редких случаях можно отказаться от автоматического batching."
		},
		category: "modal"
	},
	{
		id: 144,
		word: "under the hood",
		transcription: "[ˈʌndər ðə hʊd]",
		translation: "под капотом",
		example: {
			en: "Under the hood, React compares the previous and current trees.",
			ru: "Под капотом React сравнивает предыдущее и текущее дерево."
		},
		category: "modal"
	},
	{
		id: 145,
		word: "counterpart",
		transcription: "[ˈkaʊntərˌpɑrt]",
		translation: "аналог / двойник",
		example: {
			en: "useReducer is the counterpart of useState for complex state.",
			ru: "useReducer — аналог useState для сложной логики состояния."
		},
		category: "modal"
	},
	{
		id: 146,
		word: "footgun",
		transcription: "[ˈfʊtˌɡʌn]",
		translation: "грабли / опасная практика",
		example: {
			en: "Using an index as a key is a footgun with dynamic lists.",
			ru: "Использование индекса как key — настоящие грабли для динамических списков."
		},
		category: "modal"
	},
	{
		id: 147,
		word: "keep in mind",
		transcription: "[kiːp ɪn maɪnd]",
		translation: "иметь в виду",
		example: {
			en: "Keep in mind that state updates are asynchronous.",
			ru: "Имейте в виду, что обновления состояния обрабатываются не мгновенно."
		},
		category: "modal"
	},
	{
		id: 148,
		word: "gotcha",
		transcription: "[ˈɡɑtʃə]",
		translation: "сюрприз / загвоздка",
		example: {
			en: "A subtle gotcha: the effect runs twice in Strict Mode during development.",
			ru: "Тонкий нюанс: в Strict Mode effect в разработке запускается дважды."
		},
		category: "modal"
	},
	{
		id: 149,
		word: "corner case",
		transcription: "[ˈkɔrnər keɪs]",
		translation: "редкий граничный случай",
		example: {
			en: "This edge case handling also covers the corner case of empty input.",
			ru: "Обработка edge case также покрывает редкий сценарий с пустым вводом."
		},
		category: "modal"
	},
	{
		id: 150,
		word: "throttle",
		transcription: "[ˈθrɑtəl]",
		translation: "троттлинг / ограничение частоты",
		example: {
			en: "Throttle a scroll handler to fire at most once per 200ms.",
			ru: "Ограничьте обработчик scroll так, чтобы он срабатывал не чаще одного раза в 200 мс."
		},
		category: "modal"
	},
	{
		id: 151,
		word: "debounce",
		transcription: "[diːˈbaʊns]",
		translation: "дебаунс / отложенный вызов",
		example: {
			en: "Debounce the search input to wait until the user stops typing.",
			ru: "Сделайте debounce для поля поиска, чтобы ждать окончания ввода пользователя."
		},
		category: "modal"
	},
	{
		id: 152,
		word: "drawback",
		transcription: "[ˈdrɔbæk]",
		translation: "недостаток",
		example: {
			en: "One drawback of this approach is increased bundle size.",
			ru: "Один из недостатков этого подхода — увеличение размера bundle."
		},
		category: "modal"
	},
	{
		id: 153,
		word: "benefit",
		transcription: "[ˈbɛnɪfɪt]",
		translation: "преимущество",
		example: {
			en: "A benefit of Server Components is zero client-side JavaScript.",
			ru: "Преимущество Server Components — отсутствие клиентского JavaScript для серверной части UI."
		},
		category: "modal"
	},
	{
		id: 154,
		word: "recommend",
		transcription: "[ˌrɛkəˈmɛnd]",
		translation: "рекомендовать",
		example: {
			en: "We recommend using a linter to enforce Hook rules.",
			ru: "Мы рекомендуем использовать линтер для соблюдения правил хуков."
		},
		category: "modal"
	},
	{
		id: 155,
		word: "downside",
		transcription: "[ˈdaʊnˌsaɪd]",
		translation: "отрицательная сторона",
		example: {
			en: "The downside of prop drilling is reduced maintainability.",
			ru: "Недостаток prop drilling — снижение поддерживаемости кода."
		},
		category: "modal"
	},
	{
		id: 156,
		word: "upside",
		transcription: "[ˈʌpˌsaɪd]",
		translation: "положительная сторона",
		example: {
			en: "The upside of using context is avoiding deep prop threading.",
			ru: "Преимущество context — отсутствие необходимости глубоко прокидывать props."
		},
		category: "modal"
	},
	{
		id: 157,
		word: "suggest",
		transcription: "[səˈdʒɛst]",
		translation: "предлагать",
		example: {
			en: "I suggest wrapping expensive calculations in useMemo.",
			ru: "Я предлагаю обернуть дорогие вычисления в useMemo."
		},
		category: "modal"
	},
	{
		id: 158,
		word: "note",
		transcription: "[noʊt]",
		translation: "примечание",
		example: {
			en: "Note that Strict Mode invokes effects twice in development.",
			ru: "Обратите внимание, что Strict Mode вызывает effects дважды в development."
		},
		category: "modal"
	},
	{
		id: 159,
		word: "data modeling",
		transcription: "[ˈdeɪtə ˈmɑdəlɪŋ]",
		translation: "моделирование данных",
		example: {
			en: "A good data model for a dictionary would have a `categoryId` to link words to their categories.",
			ru: "Хорошая модель данных для словаря будет содержать `categoryId` для связи слов с их категориями."
		},
		category: "architecture"
	},
	{
		id: 160,
		word: "data relationships",
		transcription: "[ˈdeɪtə rɪˈleɪʃənʃɪps]",
		translation: "связи между данными",
		example: {
			en: "In a dictionary app, a word belongs to one category (many-to-one relationship).",
			ru: "В приложении-словаре слово относится к одной категории (связь многие-к-одному)."
		},
		category: "architecture"
	},
	{
		id: 161,
		word: "derived data",
		transcription: "[dɪˈraɪvd ˈdeɪtə]",
		translation: "производные данные",
		example: {
			en: "A filtered list of words is derived data, computed from the word list and the selected category.",
			ru: "Отфильтрованный список слов — это производные данные, вычисленные из общего списка и выбранной категории."
		},
		category: "architecture"
	},
	{
		id: 162,
		word: "data flow",
		transcription: "[ˈdeɪtə floʊ]",
		translation: "поток данных",
		example: {
			en: "A parent updates its child by passing new props down the data flow.",
			ru: "Родитель обновляет дочерний компонент, передавая новые пропсы вниз по потоку данных."
		},
		category: "architecture"
	},
	{
		id: 163,
		word: "state ownership",
		transcription: "[steɪt ˈoʊnərʃɪp]",
		translation: "владение состоянием",
		example: {
			en: "In a dictionary app, the selected category state is owned by the root `App` component because it's needed in both the Sidebar and the WordGrid.",
			ru: "В приложении-словаре состояние выбранной категории принадлежит корневому компоненту `App`, так как оно нужно и в Сайдбаре, и в Сетке слов."
		},
		category: "architecture"
	},
	{
		id: 164,
		word: "react mental model",
		transcription: "[riˈækt ˈmɛntəl ˈmɑdəl]",
		translation: "ментальная модель React",
		example: {
			en: "Instead of directly manipulating the DOM, you update state, and React re-renders the UI for you.",
			ru: "Вместо прямого манипулирования DOM вы обновляете состояние, а React сам перерисовывает UI."
		},
		category: "architecture"
	}
];