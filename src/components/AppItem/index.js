import './index.css'

const AppItem = props => {
  const {data} = props
  const {appName, imageUrl} = data
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="appImg" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
