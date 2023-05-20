export const dragDiv = (e: any, position: any, dragItem: any) => {
    e.preventDefault();
    dragItem.current = position;


}

export const dragEnter = (e: any, position: any, dragOverItem: any) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
};

export const drop = (e: any, list: any, setList: any, dragItem: any, dragOverItem:any) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
};