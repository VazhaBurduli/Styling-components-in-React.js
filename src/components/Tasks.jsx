import style from './style.module.css'

const Tasks = () => {
  return (
    <div>
        <div className={style.wrapper}>
            <div className={style.category}>
              <div className={style.tasks}>
                <div className={style.heading}>Backlog 2</div>
                <div className={style.task}>Download Android app</div>
                <div className={style.task}>Change and update account details in the iOP app</div>
                <span className={style.plus}>+</span>
              </div>
            </div>
            <div className={style.category}>
              <div className={style.tasks}>
                <div className={style.heading}>In progress 2</div>
                <div className={style.task}>Set up recurring utilities payments</div>
                <div className={style.task}>View transaction history by category</div>
                <div className={style.task}>Set and monitor progress on financial goals</div>
                <span className={style.plus}>+</span>
              </div>
            </div>
            <div className={style.category}>
              <div className={style.tasks}>
                <div className={style.heading}>Done 2</div>
                <div className={style.task}>Download iOS app</div>
                <div className={style.task}>Transfer money between accounts</div>
                <span className={style.plus}>+</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks