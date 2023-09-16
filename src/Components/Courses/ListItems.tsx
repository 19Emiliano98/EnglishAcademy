import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";

interface ParentProps{
  //titleList: string;
  data: string[];
}

const ListItems: React.FC<ParentProps> = ( data: ParentProps ) => {
  const arrayParent = data.data
  
  return (
    <>
      {
        arrayParent.map( ( x, index ) => 
          <ListItem sx={{ display: 'flex' }} key={index}>
            <Box  sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <Box 
                  sx={{ 
                    width: '15px', height: '15px', 
                    backgroundColor: '#FFA500', borderRadius: '50%'
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={ x } sx={{ ml: -3 }}/>
            </Box>
          </ListItem>
        )
      }
    </>
  )
}

export default ListItems