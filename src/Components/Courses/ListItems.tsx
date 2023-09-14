import { Box, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

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
          <ListItem>
            <Box key={index} sx={{ display: 'flex' }}>
              {/* <Typography>
                {x.titleList}
              </Typography> */}
              
              <ListItemIcon>
                <Box 
                  sx={{ 
                    width: '15px', height: '15px', 
                    backgroundColor: '#FFA500', borderRadius: '50%'
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={ x } sx={{ ml: -2.5 }}/>
            </Box>
          </ListItem>
        )
      }
    </>
  )
}

export default ListItems