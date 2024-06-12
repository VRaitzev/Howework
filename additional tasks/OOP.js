class Node
{
constructor(key)
{
    this.key = key;
    this.left = null;
    this.right = null;
}

getKey()
{
    return this.key
}
    
getRight()
{
    return this.right
}

getLeft()
{
    return this.left
}
 insert(key)
 {
    if (key > this.key)
    {
        if(this.right)
        {
          this.right.insert(key)
        }
        else
        {
            this.right = new Node(key)
        }
    }
    else if (key < this.key)
    {
        if(this.left)
        {
          this.left.insert(key)
        }
        else
        {
            this.left = new Node(key)
        }
    }
 } 
}
``
const tree = new Node(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);

console.log(tree.getKey()); // 9
console.log(tree.getLeft().getKey()); // 4
console.log(tree.getRight().getKey()); // 17
console.log(tree.getLeft().getLeft().getKey()); // 3
console.log(tree.getLeft().getRight().getKey()); // 6