import './index.css'

const HistoryItem = props => {
  const {item, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="history-item-card">
      <div className="card-details">
        <p>{timeAccessed}</p>
        <div className="sub-container">
          <div className="card-logo-and-links">
            <img src={logoUrl} alt="domain logo" className="web-logo" />
            <div className="links">
              <p className="webpage-title">{title}</p>
              <p className="webpage-title">{domainUrl}</p>
            </div>
          </div>
          <button
            type="button"
            data-testid="delete"
            onClick={deleteItem}
            className="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="web-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
