function List({ children, style, className, ...props }) {
  return (
    <div className={className} style={{padding:'0.7rem',display:'grid',gridTemplateColumns:'20% 70% 10%'}} {...props}>
      {children}
    </div>
  );
}

export default List;
