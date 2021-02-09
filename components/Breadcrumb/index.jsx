import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

const BreadcrumbComponent = props => {
  const { categories } = props;

  return (
    <Breadcrumb p="1rem 0" backgroundColor="#ededed" w="100%">
      {categories.map(category => {
        return (
          <BreadcrumbItem key={category}>
            <BreadcrumbLink href="#">{category}</BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
};

export default BreadcrumbComponent;