const images = import.meta.glob<{ default: string }>('../assets/London/*.jpg', {
    eager: true
})

console.log(images)

export function ImagesList() {

    return <div>
        <h3>Images: </h3><br />
        {
            Object.values(images).map(
                path => <img src={path.default}
                    key={path.default}
                    width='400'
                />
            )
        }
    </div>
}